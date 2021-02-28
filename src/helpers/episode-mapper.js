export default function episodeMapper(archiveShows) {
  return archiveShows.map(function mapEpisode(episode) {
    const {
      show: { id, alias, name },
      realTo,
      realFrom,
      inThePast,
      m3uUrl,
      text,
    } = episode;

    let formatted = '';
    let title = '-------';

    if (text !== null) {
      title = text.title;
      formatted = text.formatted;
    }

    return {
      alias,
      name,
      id,
      inThePast,
      duration: (realTo - realFrom) / 1000,
      mp3: m3uUrl ? m3uUrl.slice(0, -3) + 'mp3' : '',
      title,
      formatted,
      realFrom,
    };
  });
}
