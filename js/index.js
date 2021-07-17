const gridItems = document.querySelectorAll('.item-wrapper');

  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
      console.log(gridItem.childNodes[1].classList)
      gridItem.childNodes[1].classList.add('image-blur');
    });

    gridItem.addEventListener('mouseout', () => {
      console.log(gridItem.childNodes[1].classList)
      gridItem.childNodes[1].classList.remove('image-blur');
    });
  });