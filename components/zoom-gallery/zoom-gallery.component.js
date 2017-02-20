;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		zoomGalleryInit();

		window.addEventListener('resize', resizeHandler);

		function resizeHandler() {
			zoomGalleryDestroy();
			zoomGalleryInit();
		}

		function zoomGalleryInit() {
			$('#zoom-gallery-root').ezPlus({
				zoomType: 'inner',
				containLensZoom: true,
				gallery: 'zoom-gallery-thumbnails',
				cursor: 'crosshair',
				galleryActiveClass: 'active',
				borderSize: 2,
				borderColour: '#ffde13',
				galleryItem: 'span',
				zIndex: 10,
				responsive: true
			});
		}

		function zoomGalleryDestroy() {
			$('.zoomContainer').remove();
		}
	}
})();