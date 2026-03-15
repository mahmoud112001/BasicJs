
  const images = [
    { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIGA//EABgQAQEBAQEAAAAAAAAAAAAAAAARATES/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwcG/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDlAHzr18AqgAAAgAKAIQURSAAAAAIEABRRFQAAAEAAAAAABAWAAqAABQCgAAAAAAAUE0gVQwAEUQEhBc1VQFURUAAABAABAGmQChQpusjNapWaUK0Jii0ClCgUoUE1KJWqVmgVqlRBa1RFoUpUAqlKkBaJFFwqsrRpRM1U0AEEozVrTmtRCgICoCUFaKzSiNKxVpBpCmoCFRcClQqjVKhqQWp6TUWDVXNZXBW8Ws5oyNUqAYqRTeCpnWmVo1igiKyMjUclTSpoBRFFEAqoAKuMtYCglQKmiKKIoFN1AAARcVAVcaxnGk0UBFUAVIYu8TBcUAaeQqNOQKAyKgkFAIACipigAoIjTIIAJAWARAAgAC5rTONGtLioMjVExRTeJi7xMFxQ0GmEjWo1XJBUKIKgAoAAARVBMNUQZTWtxItVCKFQRQEFARFAMaTFw1RqIuMhikBTeJi7xMFihoKyNIObIoqsii1EFgUAUoiggCmIINRNFZFRQRSGIiiqMwaQqo1iRrOJoLEKgpqUFzBUMGl0AUEUYQUERGjeCMgCgGKguGKi5gALATVwXcTSKDKQigMqoCQxQEFAEFGsQzqg0AAAIACoACAAhvGdUETFxRQNBGsMADAAUAEAARQBFAAAAAUAFUBAAB//2Q==", caption: "Red" },
    { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAA1BMVEUA/wFDWfA+AAAAPklEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIcBnKwAAXyxvCsAAAAASUVORK5CYII=", caption: "Green" },
    { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAA1BMVEUAAP79f+LBAAAAPklEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIcBnKwAAXyxvCsAAAAASUVORK5CYII=", caption: "Blue" },
    { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADBv/EABoQAQEBAQEBAQAAAAAAAAAAAAABESECQTH/xAAZAQEBAQEBAQAAAAAAAAAAAAACAQADBwb/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APaMzPL30zMysyKsjMjRlkWRESRsKRsZNTGwsbGTRxsPGxm0MbCxsZtFMPExl0MYrEsZRaqysLLUYmZmZmZmZmZlZmVljI0aLiyINaRZFxcRNSRZFxZGHUxsLFxqmhjYeNiNoY2HiY0bQxMPGxV1zsTDxMYtCxCsSxVg1KVSqosqMTMzMzFEWMirEkLOIirjQkCtIuLIuNo2pIuFFkHR0cXDkbG1NHGw8bGbXPEx0xsZtc8THRMbV1zwcdLBq6UoWC6UbFKOdiYeDVIahfBVUZUYlkKJCkQVkLEkKRgqyFIkOJRtaQsaQhBJCkYpEG1MXCxsRNHGw8bGTQxMdMTGXXPEx0o51V1zsGx0sGxllcxrpYNKHK50bDo2KcHODYV/EqmLKyqsKQYcQashSJIUiBVkORJCkGhVhRpDkQNSQ5GkKQQtRcXFxB1MbCZtbQxMdMTGbXPBsdKNWFK50a6UbCOVzoWOlgVYcoWBXSwLCOBYNOwbFKCysxLCgwow04UGHE0KUOBDghSkODCg0KUKJCgudWFiQpGG1MbCxcRNBKWJWaULBsdKFU450adGlDjnQrpQqnAoU6NLXSBQp0KRxGZmJYUGHEGlDgQ4gU4UGFECnDgQ4LnThQYUGhShwIcQKsZmZEo0qNZYNCnRqwgoU6FKOkChToelODQp0PRHBoU6FV0iMzKrQoMKMlOHAhQcCukKBDiBThxzhwaFOH5c4cFzsOFAKVAsJh1tZMWpW1LWWRKFKhVODRpUKUODQ9FRpHAo0qNXHSDXOnQpHEZmZVhQIUZqcKBCiBXSHHOHBoU4cc4UQK6QpQlXRwLHSVdCUtQMLW0dbWxi1NTUt4y41oVdG1cWRKNW0apwaNWjShyDRq0KTpIlGrRqlGZGYlixmZKUOIyDXSFGZKFKFKzCBQmZKNVWZBVkZkZmZlG0azLFg0azKcGjWZYYUazEcCpWZSiMzMr/2Q==", caption: "Yellow" }
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById('mainImage');
  const caption   = document.getElementById('caption');
  const position  = document.getElementById('position');
  const prevBtn   = document.getElementById('prevBtn');
  const nextBtn   = document.getElementById('nextBtn');
  const dotsEl    = document.getElementById('dots');

  // Build dots
  images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to image ${i + 1}`);
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);
  });

  function goTo(index) {
    mainImage.classList.add('fade');

    setTimeout(() => {
      currentIndex = index;
      mainImage.src        = images[index].src;
      mainImage.alt        = images[index].caption;
      caption.textContent  = images[index].caption;
      position.textContent = `${index + 1} / ${images.length}`;
      prevBtn.disabled     = index === 0;
      nextBtn.disabled     = index === images.length - 1;

      document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });

      mainImage.classList.remove('fade');
    }, 200);
  }

  prevBtn.onclick = () => { if (currentIndex > 0) goTo(currentIndex - 1); };
  nextBtn.onclick = () => { if (currentIndex < images.length - 1) goTo(currentIndex + 1); };

  // Keyboard support
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft'  && currentIndex > 0)               goTo(currentIndex - 1);
    if (e.key === 'ArrowRight' && currentIndex < images.length-1) goTo(currentIndex + 1);
  });

  goTo(0);
