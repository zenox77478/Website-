(() => {
  const cfg = window.ZYRO_CONFIG || {};
  const links = { invite: cfg.inviteUrl, support: cfg.supportUrl, guild: cfg.guildUrl };
  document.querySelectorAll("[data-link]").forEach(el => {
    const url = links[el.dataset.link];
    if (url) el.href = url;
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const play = document.getElementById("play");
  let playing = false;
  if (play) play.addEventListener("click", () => { playing = !playing; play.textContent = playing ? "Ⅱ" : "▶"; });
})();