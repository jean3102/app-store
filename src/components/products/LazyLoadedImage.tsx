type LazyLoadedImageProps = {
	src: string;
	alt: string;
};

const LazyLoadedImage = ({ alt, src }: LazyLoadedImageProps) => {
	return (
		<img
            className="img"
			src={src}
			alt={alt}
		/>
	);
};

export default LazyLoadedImage;
