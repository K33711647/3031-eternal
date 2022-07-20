import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MatterExample() {
	const boxRef = useRef(null);
	const logo = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		const widthScreen = window.innerWidth;
		const heightScreen = window.innerHeight;
		let Engine = Matter.Engine;
		let Render = Matter.Render;
		let World = Matter.World;
		let Bodies = Matter.Bodies;
		let Body = Matter.Body;
		let Composite = Matter.Composite;
		let Composites = Matter.Composites;
		let Constraint = Matter.Constraint;
		let MouseConstraint = Matter.MouseConstraint;
		let Mouse = Matter.Mouse;
		let Runner = Matter.Runner;

		let engine = Engine.create({});
		let world = engine.world;

		let render = Render.create({
			element: boxRef.current,
			engine: engine,
			canvas: canvasRef.current,
			options: {
				width: widthScreen,
				height: heightScreen + 200,
				background: "rgb(0,0,0,0)",
				wireframes: false,
				// background: "rgba(255, 255, 255,1)",
				// wireframes: false,
				// showAngleIndicator: true,
				// showCollisions: true,
				// showVelocity: true,
			},
		});

		Render.run(render);

		// create runner
		var runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		var group = Body.nextGroup(true);
		let links = widthScreen < 800 ? 70 : 110;
		let positionStart = widthScreen < 800 ? widthScreen / 2.5 : widthScreen / 3;
		let positionEnd =
			widthScreen < 800 ? widthScreen / 1.25 : widthScreen / 1.5;

		let ropeA = Composites.stack(0, 0, links, 1, 0, 0, function (x, y, index) {
			if (index == links - 1)
				return Bodies.circle(widthScreen / 3, 0, 5, {
					render: {
						fillStyle: "transparent",
						lineWidth: 1,
						strokeStyle: "#A4A3A0",
					},
					// inertia: Infinity,
					friction: 0.00001,
					stiffness: 0.06,
				});
			if (index == links / 2)
				return Bodies.circle(widthScreen / 3, 0, 8, {
					render: {
						fillStyle: "#A4A3A0",
						lineWidth: 1,
						strokeStyle: "#A4A3A0",
					},
					density: 0.015,
					// inertia: Infinity,
					friction: 0.00001,
					stiffness: 0.06,
				});
			return Bodies.circle(widthScreen / 1.5, 0, 5, {
				render: {
					fillStyle: "transparent",
					lineWidth: 2,
					strokeStyle: "#A4A3A0",
				},
				// inertia: Infinity,
				friction: 0.00001,
				stiffness: 0.06,
			});
		});

		Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
			stiffness: 1,
			length: 0.5,
			render: { type: "line", strokeStyle: "#A4A3A0" },
			// chamfer: 15,
		});
		Composite.add(
			ropeA,
			Constraint.create({
				bodyB: ropeA.bodies[0],
				pointB: { x: 0, y: 0 },
				pointA: {
					x: ropeA.bodies[0].position.x,
					y: ropeA.bodies[0].position.y,
				},
				stiffness: 0.05,
			})
		);

		Composite.add(
			ropeA,
			Constraint.create({
				bodyB: ropeA.bodies[links - 1],
				pointB: { x: 0, y: 0 },
				pointA: {
					x: ropeA.bodies[links - 1].position.x,
					y: ropeA.bodies[links - 1].position.y,
				},
				stiffness: 0.05,
			})
		);

		Composite.add(world, [ropeA]);

		// add mouse control
		var mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false,
					},
				},
			});

		Composite.add(world, mouseConstraint);

		const element = logo.current;
		let start, previousTimeStamp;
		let done = false;

		function step(timestamp) {
			if (start === undefined) {
				start = timestamp;
			}
			const elapsed = timestamp - start;
			let offset = widthScreen < 800 ? 31 : 64;

			if (previousTimeStamp !== timestamp + 10) {
				element.style.transform =
					"translate(" +
					(ropeA.bodies[links / 2].position.x - offset) +
					"px, " +
					(ropeA.bodies[links / 2].position.y + 100) +
					"px)";
			}

			window.requestAnimationFrame(step);
		}

		window.requestAnimationFrame(step);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: widthScreen, y: heightScreen },
			center: true,
		});

		// window.addEventListener("resize", function () {
		// 	if (Render) {
		// 		Render.canvas.width = widthScreen;
		// 		Render.canvas.height = heightScreen;
		// 	}
		// });

		// add gyro control
		if (typeof window !== "undefined") {
			var updateGravity = function (event) {
				var orientation =
						typeof window.orientation !== "undefined" ? window.orientation : 0,
					gravity = engine.gravity;

				if (orientation === 0) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(event.beta, -90, 90) / 90;
				} else if (orientation === 180) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
				} else if (orientation === 90) {
					gravity.x = Common.clamp(event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
				} else if (orientation === -90) {
					gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
				}
			};

			window.addEventListener("deviceorientation", updateGravity);
		}

		// context for MatterTools.Demo
		return {
			engine: engine,
			runner: runner,
			render: render,
			canvas: render.canvas,
			stop: function () {
				Matter.Render.stop(render);
				Matter.Runner.stop(runner);
				if (typeof window !== "undefined") {
					window.removeEventListener("deviceorientation", updateGravity);
				}
			},
		};
	}, []);

	return (
		<div ref={boxRef} className="absolute top-[-200px] left-0 z-[15]">
			<svg
				viewBox="0 0 67 76"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute w-16 origin-top md:w-32"
				ref={logo}
			>
				<path
					d="M0.384 30.848C7.488 12.512 22.08 0.799995 38.016 0.799995C53.952 0.799995 66.72 12.416 66.72 26.912C66.72 45.92 51.744 60.704 32.352 60.992C26.592 61.088 20.544 51.968 20.544 43.136C20.544 35.264 23.904 29.984 28.512 29.504C33.984 28.928 38.496 39.392 43.584 39.392C45.12 39.392 45.888 37.28 45.6 33.92C44.928 26.144 40.8 20.768 33.696 20.768C23.04 20.768 13.44 30.656 13.44 41.696C13.44 59.36 24.384 68 37.536 68.384C46.752 68.672 56.256 63.392 63.744 54.944L64.512 55.424C56.256 68.096 44.448 75.776 32.64 75.776C18.72 75.776 5.856 66.56 5.376 48.416C4.8 29.12 21.792 17.216 35.808 17.216C45.408 17.216 53.568 22.976 53.568 35.168C53.568 39.296 51.072 45.92 48 45.632C43.488 45.248 37.44 39.296 30.048 38.72C26.208 38.432 23.808 40.832 23.808 43.424C23.808 49.568 33.312 55.232 42.72 54.464C52.704 53.6 60.096 44.48 60.096 32.96C60.096 18.944 49.632 8.48 35.808 8.48C22.464 8.48 9.12 17.216 1.248 31.232L0.384 30.848Z"
					fill="#A4A3A0"
					strokeWidth="0"
				/>
			</svg>
			<canvas ref={canvasRef} />
		</div>
	);
}
