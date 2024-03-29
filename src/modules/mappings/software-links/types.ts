/* Adobe */
export type Photoshop = "adobe.cc.photoshop";
export type Illustrator = "adobe.cc.illustrator";
export type XD = "adobe.cc.xd";
export type AfterEffects = "adobe.cc.after-effects";
export type InDesign = "adobe.cc.indesign";
export type Dimension = "adobe.cc.dimension";
export type LightroomCC = "adobe.cc.lightroom-cc";
export type LightroomClassic = "adobe.cc.lightroom-classic";
export type AdobeApps =
	| Photoshop
	| Illustrator
	| XD
	| AfterEffects
	| InDesign
	| Dimension
	| LightroomCC
	| LightroomClassic;

/* Maxon */
export type Cinema4D = "maxon.cinema4d";
export type Redshift = "maxon.redshift";
export type MagicBulletFX = "maxon.magic-bullet";
export type MaxonApps = Cinema4D | Redshift | MagicBulletFX;

/* Others */
export type FigmaDesign = "figma.design";
export type FigmaFigjam = "figma.figjam";
export type OtherApps = FigmaDesign | FigmaFigjam;

export type AllApps = AdobeApps | MaxonApps | OtherApps;
