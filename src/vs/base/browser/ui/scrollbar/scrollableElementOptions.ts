/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { ScrollbarVisibility } from 'vs/base/common/scrollable';

export interface ScrollableElementCreationOptions {
	/**
	 * Allow scrollbar rendering to use translate3d.
	 */
	canUseTranslate3d: boolean;
	/**
	 * The scrollable element should not do any DOM mutations until renderNow() is called.
	 * Defaults to false.
	 */
	lazyRender?: boolean;
	/**
	 * CSS Class name for the scrollable element.
	 */
	className?: string;
	/**
	 * Drop subtle horizontal and vertical shadows.
	 * Defaults to false.
	 */
	useShadows?: boolean;
	/**
	 * Handle mouse wheel (listen to mouse wheel scrolling).
	 * Defaults to true
	 */
	handleMouseWheel?: boolean;
	/**
	 * Flip axes. Treat vertical scrolling like horizontal and vice-versa.
	 * Defaults to false.
	 */
	flipAxes?: boolean;
	/**
	 * If enabled, will scroll horizontally when scrolling vertical.
	 * Defaults to false.
	 */
	scrollYToX?: boolean;
	/**
	 * Always consume mouse wheel events, even when scrolling is no longer possible.
	 * Defaults to false.
	 */
	alwaysConsumeMouseWheel?: boolean;
	/**
	 * A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
	 * Defaults to 1.
	 */
	mouseWheelScrollSensitivity?: number;
	/**
	 * Height for vertical arrows (top/bottom) and width for horizontal arrows (left/right).
	 * Defaults to 11.
	 */
	arrowSize?: number;
	/**
	 * The dom node events should be bound to.
	 * If no listenOnDomNode is provided, the dom node passed to the constructor will be used for event listening.
	 */
	listenOnDomNode?: HTMLElement;
	/**
	 * Control the visibility of the horizontal scrollbar.
	 * Accepted values: 'auto' (on mouse over), 'visible' (always visible), 'hidden' (never visible)
	 * Defaults to 'auto'.
	 */
	horizontal?: ScrollbarVisibility;
	/**
	 * Height (in px) of the horizontal scrollbar.
	 * Defaults to 10.
	 */
	horizontalScrollbarSize?: number;
	/**
	 * Height (in px) of the horizontal scrollbar slider.
	 * Defaults to `horizontalScrollbarSize`
	 */
	horizontalSliderSize?: number;
	/**
	 * Render arrows (left/right) for the horizontal scrollbar.
	 * Defaults to false.
	 */
	horizontalHasArrows?: boolean;
	/**
	 * Control the visibility of the vertical scrollbar.
	 * Accepted values: 'auto' (on mouse over), 'visible' (always visible), 'hidden' (never visible)
	 * Defaults to 'auto'.
	 */
	vertical?: ScrollbarVisibility;
	/**
	 * Width (in px) of the vertical scrollbar.
	 * Defaults to 10.
	 */
	verticalScrollbarSize?: number;
	/**
	 * Width (in px) of the vertical scrollbar slider.
	 * Defaults to `verticalScrollbarSize`
	 */
	verticalSliderSize?: number;
	/**
	 * Render arrows (top/bottom) for the vertical scrollbar.
	 * Defaults to false.
	 */
	verticalHasArrows?: boolean;
	/**
	 * Add a `last-scroll-time` attribute to scroll targets or parents of scroll targets matching the following class name
	 */
	saveLastScrollTimeOnClassName?: string;
}

export interface ScrollableElementChangeOptions {
	canUseTranslate3d: boolean;
	handleMouseWheel?: boolean;
	mouseWheelScrollSensitivity?: number;
}

export interface ScrollableElementResolvedOptions {
	canUseTranslate3d: boolean;
	lazyRender: boolean;
	className: string;
	useShadows: boolean;
	handleMouseWheel: boolean;
	flipAxes: boolean;
	scrollYToX: boolean;
	alwaysConsumeMouseWheel: boolean;
	mouseWheelScrollSensitivity: number;
	arrowSize: number;
	listenOnDomNode: HTMLElement;
	horizontal: ScrollbarVisibility;
	horizontalScrollbarSize: number;
	horizontalSliderSize: number;
	horizontalHasArrows: boolean;
	vertical: ScrollbarVisibility;
	verticalScrollbarSize: number;
	verticalSliderSize: number;
	verticalHasArrows: boolean;
	saveLastScrollTimeOnClassName: string;
}
