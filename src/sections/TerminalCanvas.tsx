import { useRef, useEffect } from 'react';

interface Cell {
  char: string;
  brightness: number;
  pulse: number;
  speed: number;
}

export default function TerminalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = ['+', '-', '|', '/', '\\', '=', '*', '#', '%', '@', '0', '1', ':', '.', '~', '^'];
    const CELL_SIZE = 14;

    let cols = 0;
    let rows = 0;
    let time = 0;
    let charGrid: Cell[][] = [];
    let densityMap: number[][] = [];
    let mouseX = -1;
    let mouseY = -1;
    let mouseActive = false;
    let mouseTimeout: ReturnType<typeof setTimeout> | null = null;
    let animId: number;

    function resize() {
      canvas!.width = hero!.offsetWidth;
      canvas!.height = hero!.offsetHeight;
      cols = Math.ceil(canvas!.width / CELL_SIZE);
      rows = Math.ceil(canvas!.height / CELL_SIZE);

      charGrid = [];
      densityMap = [];
      for (let r = 0; r < rows; r++) {
        const row: Cell[] = [];
        const dRow: number[] = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            char: chars[Math.floor(Math.random() * chars.length)],
            brightness: Math.random() * 0.3,
            pulse: Math.random() * Math.PI * 2,
            speed: 0.02 + Math.random() * 0.03,
          });
          dRow.push(
            Math.sin((r / rows) * Math.PI) *
            Math.sin((c / cols) * Math.PI) *
            (0.5 + Math.random() * 0.5)
          );
        }
        charGrid.push(row);
        densityMap.push(dRow);
      }
    }

    function draw() {
      ctx!.fillStyle = '#0a0a0a';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      time += 0.016;
      ctx!.font = '12px "JetBrains Mono", monospace';

      let mx = -1;
      let my = -1;
      if (mouseActive) {
        mx = Math.floor(mouseX / CELL_SIZE);
        my = Math.floor(mouseY / CELL_SIZE);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = charGrid[r][c];
          const density = densityMap[r][c];
          cell.pulse += cell.speed;

          if (Math.random() < 0.02 * density) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
          }

          let brightness = ((Math.sin(cell.pulse) + 1) / 2) * density * 0.4;
          let charColor = '#9e9e9e';
          let font = '400 12px "JetBrains Mono", monospace';

          if (mouseActive) {
            const dist = Math.sqrt((r - my) ** 2 + (c - mx) ** 2);
            const influence = Math.max(0, 1 - dist / 8);
            if (influence > 0) {
              cell.char = '*';
              brightness = Math.min(1, brightness + influence * 0.8);
              charColor = '#c47d5b';
              font = '700 13px "JetBrains Mono", monospace';
            }
          }

          if (!mouseActive && Math.random() < 0.005 * density) {
            charColor = Math.random() > 0.5 ? '#c47d5b' : '#d4e3f0';
            font = '600 12px "JetBrains Mono", monospace';
          }

          ctx!.globalAlpha = 0.15 + brightness * 0.85;
          ctx!.font = font;
          ctx!.fillStyle = charColor;
          ctx!.fillText(cell.char, c * CELL_SIZE, r * CELL_SIZE + 10);
        }
      }

      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
      if (mouseTimeout) clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouseActive = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener('resize', resize);
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
      if (mouseTimeout) clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <div ref={heroRef} style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />
    </div>
  );
}
