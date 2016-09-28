export default class Episode {
  static formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  constructor(data) {
    this.prev = data.prev;
    this.next = data.next;
    delete data.prev;
    delete data.nex;
    this.ep = data;
  }

  art() {
    return this.ep.art_url;
  }

  audio() {
    return this.ep.audio_url;
  }

  duration() {
    return this.ep.duration;
  }

  hasPrev() {
    return !!this.prev;
  }

  hasNext() {
    return !!this.next;
  }

  nowPlaying() {
    if (this.ep.number) {
      return `${this.ep.podcast} #${this.ep.number}`
    } else {
      return this.ep.podcast;
    }
  }

  prevNumber() {
    return `#${this.prev.number}`;
  }

  prevLocation() {
    return this.prev.location;
  }

  nextNumber() {
    return `#${this.next.number}`;
  }

  nextLocation() {
    return this.next.location;
  }

  title() {
    return this.ep.title;
  }
}