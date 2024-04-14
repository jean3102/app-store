import { Link } from 'react-router-dom';
import '../styles/components/hyperlink.css';

type HyperlinkProps = {
	title: string;
	children: React.ReactNode;
	textLink: string
};
const Hyperlink = ({ title, children,textLink }: HyperlinkProps) => {
	return (
		<section className="Link">
			<h3>{title}</h3>

			<Link to={'/'}>
				{children}
				{textLink}
			</Link>
		</section>
	);
};

export default Hyperlink;
