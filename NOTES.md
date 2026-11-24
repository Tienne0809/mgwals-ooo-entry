# Notes

Entry for make.fun's "Out of Office: The Overworked AI's Auto-Reply" bounty ($2, winner takes all).

The line (157 characters, inside the 1–159 gate): an overworked AI is out until Monday and a printed flowchart is covering for it — the deadpan downgrade is the joke, sharpened by the instructions to type slowly and lower expectations. The closing image, back once its fans stop spinning, gives the concrete overheated-machine detail and the hint of relief. It still works as a real auto-reply: it names the return day, says who (what) is covering, and sets expectations while the sender is away. This line was picked as the best of 8 candidates across 3 blind judging rounds, finishing top-2 in every round.

`main.ts` embeds the line as a constant and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), creating the directory if needed. `line.txt` holds the exact same line for byte-wise comparison.
