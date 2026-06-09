"""List course documentation and notebooks without Czech copies."""

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRANSLATABLE_SUFFIXES = {".md", ".ipynb", ".txt"}
SKIP_PARTS = {
    ".git",
    ".venv",
    "venv",
    "__pycache__",
    "node_modules",
}
SKIP_NAMES = {
    "requirements.txt",
}


def is_skipped(path: Path) -> bool:
    return bool(set(path.parts) & SKIP_PARTS)


def czech_copy_for(path: Path) -> Path:
    if path.suffix == ".md":
        return path.with_name(f"{path.stem}.cs.md")
    if path.suffix == ".ipynb":
        return path.with_name(f"{path.stem}.cs.ipynb")
    if path.suffix == ".txt":
        return path.with_name(f"{path.stem}.cs.txt")
    raise ValueError(f"Unsupported suffix: {path.suffix}")


def main() -> None:
    targets = []
    for path in sorted(ROOT.rglob("*")):
        rel_path = path.relative_to(ROOT)
        if not path.is_file() or is_skipped(rel_path):
            continue
        if path.name in SKIP_NAMES:
            continue
        if path.suffix not in TRANSLATABLE_SUFFIXES:
            continue
        if ".cs" in path.suffixes:
            continue
        if not czech_copy_for(path).exists():
            targets.append(rel_path)

    for path in targets:
        print(path)

    print(f"\nPending Czech copies: {len(targets)}")


if __name__ == "__main__":
    main()
