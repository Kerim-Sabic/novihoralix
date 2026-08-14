import Link from "./_components/ReliableLink";
import { Arrow, PageIntro } from "./_components/SiteChrome";

export default function NotFound() { return <PageIntro eyebrow="404" title="This page is no longer here." copy="The Horalix website has been rebuilt around echocardiography. The page you requested may have moved." actions={<Link className="button button-light" href="/">Return home <Arrow /></Link>} />; }
