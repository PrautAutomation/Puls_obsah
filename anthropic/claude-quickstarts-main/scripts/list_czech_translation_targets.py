"""List documentation files that do not have Czech copies yet."""

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
    "dev-requirements.txt",
    "test-requirements.txt",
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
        if not path.is_file() or is_skipped(path.relative_to(ROOT)):
            continue
        if path.name in SKIP_NAMES:
            continue
        if path.suffix not in TRANSLATABLE_SUFFIXES:
            continue
        if ".cs" in path.suffixes:
            continue
        czech_path = czech_copy_for(path)
        if not czech_path.exists():
            targets.append(path.relative_to(ROOT))

    for path in targets:
        print(path)

    print(f"\nPending Czech copies: {len(targets)}")


if __name__ == "__main__":
    main()
