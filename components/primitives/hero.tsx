import React from 'react';
import { Headline } from './text';
import { Stack } from './stack';
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

// Type guard for text nodes
type TextNode = {
	type: 'text';
	text: string;
	bold?: boolean;
	italic?: boolean;
	code?: boolean;
	[key: string]: any;
};

const welcomeHome: TinaMarkdownContent = {
	"type": "root",
	"children": [
		{
			"type": "p",
			"children": [
				{
					"type": "text",
					"text": "Welcome",
					"_content_source": {
						"queryId": "4adp49",
						"path": [
							"page",
							"blocks",
							1,
							"headlineRich",
							"children",
							0,
							"children",
							0
						]
					}
				}
			],
			"_content_source": {
				"queryId": "4adp49",
				"path": [
					"page",
					"blocks",
					1,
					"headlineRich",
					"children",
					0
				]
			}
		},
		{
			"type": "p",
			"children": [
				{
					"type": "text",
					"text": "Pre ",
					"_content_source": {
						"queryId": "4adp49",
						"path": [
							"page",
							"blocks",
							1,
							"headlineRich",
							"children",
							1,
							"children",
							0
						]
					}
				},
				{
					"type": "text",
					"text": "Home",
					"bold": true,
					"_content_source": {
						"queryId": "4adp49",
						"path": [
							"page",
							"blocks",
							1,
							"headlineRich",
							"children",
							1,
							"children",
							1
						]
					}
				}
			],
			"_content_source": {
				"queryId": "4adp49",
				"path": [
					"page",
					"blocks",
					1,
					"headlineRich",
					"children",
					1
				]
			}
		}
	]
}


const isTextNode = (node: any): node is TextNode => {
	return node && node.type === 'text' && typeof node.text === 'string';
};

export const headlineRenderer = (data: TinaMarkdownContent) => {
	const children = data.children
	return (
		<Headline style="primary" background="none" color="white" size="xxlarge" className='uppercase space-y-6 text-center'>
			{children.map((child: any, cindex) => {
				return <span key={cindex} className="block">{
					child.children.map((grandchild: any) => {
						if (isTextNode(grandchild)) {
							if (grandchild.bold) {
								const splitText = grandchild.text.split(' ').filter(word => word.length > 0)
								return splitText.map((word, windex) => {
									return <mark key={windex} className="inline-block pt-2 pb-3 px-3">{word}</mark>
								})
							}
							return grandchild.text
						}
						return null
					})
				}</span>
			})}
		</Headline>
	)
}

export const Hero = () => {

	console.log('Welcome home: ', welcomeHome);

	return <div className="relative h-screen">
		<video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
			<source src="https://junctionchurch.net/wp-content/uploads/2025/08/1-MINUTE-VID-1.mp4" type="video/mp4" />
		</video>
		<Stack className="relative h-full flex flex-col justify-center items-center">
			{headlineRenderer(welcomeHome)}
			<Headline style="secondary" color="white" size="xsmall">
				One Church in Three Locations
			</Headline>
			<p className="prose text-jc-white font-bold">Loughborough, Leicester, Nottingham</p>
		</Stack>
	</div>
}

/**
 * We have some choices. Text isn't enough. Inbuilt richtext is the way. But we wanna limit it. So no showFloatingToolbar. Also we wanna add a custom mark.
 * This stuff is mostly easily. The main thing is we then have to convert that output, to our own custom components. 
 */
