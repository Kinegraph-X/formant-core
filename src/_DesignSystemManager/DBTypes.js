const mongoose = require('mongoose');
mongoose.pluralize(function(name) { return name; });
//mongoose.set('debug', true);
const Schema = mongoose.Schema;



/**
 * db name : themed_components
 */


var ComponentStyle = new Schema({
	componentName: {
		type: String,
		index: true
	},
	componentStyle: {
		type: String,
		index: true
	},
	props: [
			{
				selector: String,
				alignContent : String,
				alignItems : String,
				alignSelf : String,
				all : String,
				animation : String,
				animationDelay : String,
				animationDirection : String,
				animationDuration : String,
				animationFillMode : String,
				animationIterationCount : String,
				animationName : String,
				animationPlayState : String,
				animationTimingFunction : String,
				backfaceVisibility : String,
				background : String,
				backgroundAttachment : String,
				backgroundBlendMode : String,
				backgroundClip : String,
				backgroundColor : String,
				backgroundImage : String,
				backgroundOrigin : String,
				backgroundPosition : String,
				backgroundRepeat : String,
				backgroundSize : String,
				border : String,
				borderBottom : String,
				borderBottomColor : String,
				borderBottomLeftRadius : String,
				borderBottomRightRadius : String,
				borderBottomStyle : String,
				borderBottomWidth : String,
				borderCollapse : String,
				borderColor : String,
				borderImage : String,
				borderImageOutset : String,
				borderImageRepeat : String,
				borderImageSlice : String,
				borderImageSource : String,
				borderImageWidth : String,
				borderLeft : String,
				borderLeftColor : String,
				borderLeftStyle : String,
				borderLeftWidth : String,
				borderRadius : String,
				borderRight : String,
				borderRightColor : String,
				borderRightStyle : String,
				borderRightWidth : String,
				borderSpacing : String,
				borderStyle : String,
				borderTop : String,
				borderTopColor : String,
				borderTopLeftRadius : String,
				borderTopRightRadius : String,
				borderTopStyle : String,
				borderTopWidth : String,
				borderWidth : String,
				bottom : String,
				boxDecorationBreak : String,
				boxShadow : String,
				boxSizing : String,
				breakAfter : String,
				breakBefore : String,
				breakInside : String,
				captionSide : String,
				caretColor : String,
				'@charset' : String,
				clear : String,
				clip : String,
				clipPath : String,
				color : String,
				columnCount : String,
				columnFill : String,
				columnGap : String,
				columnRule : String,
				columnRuleColor : String,
				columnRuleStyle : String,
				columnRuleWidth : String,
				columnSpan : String,
				columnWidth : String,
				columns : String,
				content : String,
				counterIncrement : String,
				counterReset : String,
				cursor : String,
				direction : String,
				display : String,
				emptyCells : String,
				filter : String,
				flex : String,
				flexBasis : String,
				flexDirection : String,
				flexFlow : String,
				flexGrow : String,
				flexShrink : String,
				flexWrap : String,
				float : String,
				font : String,
				'@fontFace' : String,
				fontFamily : String,
				fontFeatureSettings : String,
				fontKerning : String,
				fontSize : String,
				fontSizeAdjust : String,
				fontStretch : String,
				fontStyle : String,
				fontVariant : String,
				fontVariantCaps : String,
				fontWeight : String,
				grid : String,
				gridArea : String,
				gridAutoColumns : String,
				gridAutoFlow : String,
				gridAutoRows : String,
				gridColumn : String,
				gridColumnEnd : String,
				gridColumnGap : String,
				gridColumnStart : String,
				gridGap : String,
				gridRow : String,
				gridRowEnd : String,
				gridRowGap : String,
				gridRowStart : String,
				gridTemplate : String,
				gridTemplateAreas : String,
				gridTemplateColumns : String,
				gridTemplateRows : String,
				hangingPunctuation : String,
				height : String,
				hyphens : String,
				'@import' : String,
				isolation : String,
				justifyContent : String,
				'@keyframes' : String,
				left : String,
				letterSpacing : String,
				lineHeight : String,
				listStyle : String,
				listStyleImage : String,
				listStylePosition : String,
				listStyleType : String,
				margin : String,
				marginBottom : String,
				marginLeft : String,
				marginRight : String,
				marginTop : String,
				maxHeight : String,
				maxWidth : String,
				'@media' : String,
				minHeight : String,
				minWidth : String,
				mixBlendMode : String,
				objectFit : String,
				objectPosition : String,
				opacity : String,
				order : String,
				outline : String,
				outlineColor : String,
				outlineOffset : String,
				outlineStyle : String,
				outlineWidth : String,
				overflow : String,
				overflowX : String,
				overflowY : String,
				padding : String,
				paddingBottom : String,
				paddingLeft : String,
				paddingRight : String,
				paddingTop : String,
				paddingInlineStart : String,
				paddingInlineEnd : String,
				pageBreakAfter : String,
				pageBreakBefore : String,
				pageBreakInside : String,
				perspective : String,
				perspectiveOrigin : String,
				pointerEvents : String,
				position : String,
				quotes : String,
				resize : String,
				right : String,
				scrollBehavior : String,
				tabSize : String,
				tableLayout : String,
				textAlign : String,
				textAlignLast : String,
				textDecoration : String,
				textDecorationColor : String,
				textDecorationLine : String,
				textDecorationStyle : String,
				textIndent : String,
				textJustify : String,
				textOverflow : String,
				textShadow : String,
				textTransform : String,
				top : String,
				transform : String,
				transformOrigin : String,
				transformStyle : String,
				transition : String,
				transitionDelay : String,
				transitionDuration : String,
				transitionProperty : String,
				transitionTimingFunction : String,
				unicodeBidi : String,
				userSelect : String,
				verticalAlign : String,
				visibility : String,
				whiteSpace : String,
				width : String,
				wordBreak : String,
				wordSpacing : String,
				wordWrap : String,
				writingMode : String,
				zIndex : String
			}
		],
	theme: {
		type: Schema.ObjectId,
		ref: 'theme',
		index: true
	},
	designContext: {
		type: Schema.ObjectId,
		ref: 'design_context',
		index: true
	}
}, { collection: 'componentStyle' });







var Theme = new Schema({
	name: {
		type: String,
		index: true
	}
}, { collection: 'theme' });



var DesignContext = new Schema({
	env : {
		type: String,
		index: true
	},
	technology : String
}, {collection : 'design_context'});





/**
 * db name : design_system
 */

var FontDef = new Schema({
	objectType : String,
	family : {
		type: String,
		index: true
	},
	style : String,
	weight : Number
}, { collection: 'fontDef' });

var ColorDef = new Schema({
	objectType : String,
	hex : String
}, { collection: 'colorDef' });

var BorderDef = new Schema({
	objectType : String,
	style : String
}, { collection: 'borderDef' });


var FontSet = new Schema({
	objectType : String,
	members : [
		{
			type: Schema.ObjectId,
			ref: 'fontDef'
		}
	]
}, { collection: 'fontSet' });

var ColorSet = new Schema({
	objectType : String,
	members : [
		{
			type: Schema.ObjectId,
			ref: 'colorDef'
		}
	]
}, { collection: 'colorSet' });

var BorderSet = new Schema({
	objectType : String,
	members : [
		{
			type: Schema.ObjectId,
			ref: 'borderDef'
		}
	]
}, { collection: 'borderSet' });
	
	
	
	
	
	

module.exports = {
	ComponentStyle: mongoose.model('componentStyle', ComponentStyle),
	Theme: mongoose.model('theme', Theme),
	DesignContext : mongoose.model('design_context', DesignContext),
	ColorDef : mongoose.model('colorDef', ColorDef),
	FontDef : mongoose.model('fontDef', FontDef),
	BorderDef : mongoose.model('borderDef', BorderDef),
	ColorSet : mongoose.model('colorSet', ColorSet),
	FontSet : mongoose.model('fontSet', FontSet),
	BorderSet : mongoose.model('borderSet', BorderSet)
}