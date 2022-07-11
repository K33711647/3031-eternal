import { projectBySlugQuery, pageBySlugQuery } from "../../library/queries";
import { previewClient } from "../../library/sanity.server";

export default async function preview(req, res) {
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (
		req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
		!req.query.slug
	) {
		return res.status(401).json({ message: "Invalid token" });
	}

	// Check if the project with the given `slug` exists
	const project = await previewClient.fetch(projectBySlugQuery, {
		slug: req.query.slug,
	});

	const page = await previewClient.fetch(pageBySlugQuery, {
		slug: req.query.slug,
	});

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	if (project) {
		// Redirect to the path from the fetched post
		// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
		res.writeHead(307, { Location: `/work/${project.slug}` });
	} else if (page) {
		// Redirect to the path from the fetched post
		// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
		res.writeHead(307, { Location: `/${page.slug}` });
	} else {
		return res.status(401).json({ message: "Invalid slug" });
	}

	res.end();
}
