(() => {
  const button = document.getElementById('copy-citation');
  const citation = document.getElementById('paper-citation');
  const status = document.getElementById('citation-status');
  if (!button || !citation || !status) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim() + '\n');
      status.textContent = ' Copied!';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = ' Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
})();
