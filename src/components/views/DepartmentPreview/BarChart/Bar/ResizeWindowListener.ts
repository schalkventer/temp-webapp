import { debounce } from 'lodash';

class ResizeWindowListener {
  constructor(callback, { delay = 300 } = {}) {
    this.callback = callback;
    this.debouncedResize = debounce(this.onResize, delay);

    window.addEventListener('resize', this.debouncedResize, false);
    this.onResize();
  }

  stop = (): number => {
    const size = this.dimensions !== 'height' ? window.innerWidth : window.innerHeight;

    window.removeEventListener('resize', this.debouncedResize, false);

    return size;
  };

  onResize = (): number => {
    const size = this.dimensions !== 'height' ? window.innerWidth : window.innerHeight;

    if (this.callback) {
      this.callback(size);
    }

    return size;
  };
}

export default ResizeWindowListener;
