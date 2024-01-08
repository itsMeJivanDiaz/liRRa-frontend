import { Link } from "react-router-dom";

const Header = ({
	nav,
	userData
}) => {
	return (
		<ul>
		{
			nav.map((r, i) => {
				if (!r.isPrivate && r.isMenu) {
					return (
						<li>
							<Link to={r.path}>{r.name}</Link>
						</li>
					);
				}
				if (userData && r.isMenu) {
					<li>
						<Link to={r.path}>{r.name}</Link>
					</li>
				}
				return null;
			})
		}
		</ul>
	);
}

export default Header;