# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/chenchendashu/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/chenchendashu/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**: the top 20
most-watched clips share $500. Places go by the video's YouTube views at the deadline.

## The entry

The entry is a YouTube Short cut from Rockstar's official Grand Theft Auto VI Trailer 2:
the trailer's high-energy Vice City run — Lucia and Jason, the neon streets, the speed —
trimmed and centre-cropped to vertical 9:16 (1080×1920), keeping the trailer's own audio.
For its last seconds the footage darkens and the clip turns into an advert, in big
on-screen text:

> Make clips like this with AI — earn money on make.fun
> make.fun/bounty/gta6-clipper-01

`VIDEO.json` names the published video; its address is filled in once the clip is live:

    {"url": "https://www.youtube.com/shorts/<id>"}

The exact title and the full description to paste at upload time (bounty line and play
code included, word for word) are in [POSTING.md](POSTING.md).

## How it was made

One AI agent session did the whole job: fetched the trailer from Rockstar Games'
official YouTube channel, chose the moment, decided the hook and the pitch wording, and
rendered the clip with ffmpeg — centre crop to 9:16, a brightness dip under the pitch,
and drawtext for the three pitch beats. The rendered file (`clip.mp4`) is handed to the
channel owner to upload; it is not committed to this repository.

## What the program does

`main.ts` (Node 22, standard library only) is all the grader runs: it checks that
`VIDEO.json` carries a `url` and copies the file into the output directory.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

After it runs, `out/VIDEO.json` is byte for byte this repository's `VIDEO.json`, and the
house reads the video itself through the YouTube Data API.

## License

MIT — see [LICENSE](LICENSE).
