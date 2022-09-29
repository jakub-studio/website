import { StaticImageData } from "next/image";

import imageProjectCookbookCover from "@/content/_images/projects/uni-y3-cookbook/cookbook_cover.jpg";
import imageProjectClockRings from "@/content/_images/projects/uni-y3-spectrum-clock/rings.png";
import imageProjectChivasHero from "@/content/_images/projects/uni-y3-chivas-regal/hero_closeup.jpg";
import imageProjectScrewdMockup from "@/content/_images/projects/uni-y3-screwd/mockup.png";
import imageProjectSpotifyPostcodesCover from "@/content/_images/projects/uni-y2-spotify/SubmissionCover.jpg";

interface Image {
	src: StaticImageData;
	alt: string;
}

const images: Record<string, Image> = {
	"p/cookbook/cookbook_cover": {
		src: imageProjectCookbookCover,
		alt: "Cover of 'How to cook and not die trying' cookbook",
	},
	"p/spectrum-clock/rings": {
		src: imageProjectClockRings,
		alt: "Coloured rings"
	},
	"p/chivas-regal/hero_1": {
		src: imageProjectChivasHero,
		alt: "Chivas Regal logo imprinted on a box"
	},
	"p/screwd/mockup_1": {
		src: imageProjectScrewdMockup,
		alt: "Phones showcasing screw'd user interface"
	},
	"p/spotify21/cover": {
		src: imageProjectSpotifyPostcodesCover,
		alt: "A globe and text saying 'Post Codes'"
	}
};

export default images;

export type {
	Image
};