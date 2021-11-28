"use strict";

/*;
	@license:module:
		MIT License

		Copyright (c) 2021-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2020-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@license:module;
*/

const ConciseEvent = (
	function ConciseEvent( scope, option ){
		if(
				(
						(
										this
							instanceof	ConciseEvent
						)
					===	true
				)
		){
			(
					this
					.scope
				=	(
						scope
					)
			);

			(
					this
					.option
				=	(
						scope
					)
			);

			if(
					(
							typeof
							require
						==	"function"
					)
				&&
					(
							typeof
							require( "events" )
						==	"function"
					)
			){
				const EventEmitter = require( "events" );

				(
						this
						.emitter
					=	(
							new	EventEmitter( )
						)
				);
			}
			else if(
					(
							typeof
							document
						==	"object"
					)
				&&
					(
							typeof
							HTMLDocument
						==	"function"
					)
				&&
					(
							(
											document
								instanceof	HTMLDocument
							)
						===	true
					)
			){
				(
						this
						.emitter
					=	(
							document
						)
				);
			}
			else{
				(
						this
						.emitter
					=	(
							{ }
						)
				);
			}
		}
		else{
			return	(
						new	ConciseEvent( scope, option )
					);
		}
	}
);

const addEventListener = (
	function addEventListener( eventName, handler, option ){
		if(
				(
						typeof
						this
						.emitter
						.addListener
					==	"function"
				)
		){

		}
		else if(
				(
						typeof
						this
						.emitter
						.addListener
					==	"function"
				)
		){

		}
	}
);

(
		ConciseEvent
		.prototype
		.addEventListener
	=	(
			addEventListener
		)
);

(
		ConciseEvent
		.prototype
		.addListener
	=	(
			addEventListener
		)
);

(
		ConciseEvent
		.prototype
		.on
	=	(
			addEventListener
		)
);

(
		ConciseEvent
		.prototype
		.once
	=	(
			function once( ){

			}
		)
);

const removeEventListener = (
	function removeEventListener( eventName, handler, option ){

	}
);

(
		ConciseEvent
		.prototype
		.removeEventListener
	=	(
			removeEventListener
		)
);

(
		ConciseEvent
		.prototype
		.removeListener
	=	(
			removeEventListener
		)
);

(
		ConciseEvent
		.prototype
		.off
	=	(
			removeEventListener
		)
);

const dispatchEvent = (
	function dispatchEvent( eventName, parameterList ){

	}
);

(
		ConciseEvent
		.prototype
		.dispatchEvent
	=	(
			dispatchEvent
		)
);

(
		ConciseEvent
		.prototype
		.emit
	=	(
			dispatchEvent
		)
);

(
	(
		function( ){
			if(
					(
							typeof
							concise
						==	"object"
					)
			){
				(
						concise
						.event
					=	(
							ConciseEvent
						)
				);
			}
		}
	)( )
);

(
		module
		.exports
	=	(
			ConciseEvent
		)
);
