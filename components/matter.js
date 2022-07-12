import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MatterExample() {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
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
				width: window.innerWidth,
				height: window.innerHeight,
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

		console.log(group);

		var ropeA = Composites.stack(0, 0, 100, 1, 0, 0, function (x, y) {
			return Bodies.circle(x, y, 5, {
				render: {
					fillStyle: "transparent",
					lineWidth: 2,
					strokeStyle: "white",
				},
			});
		});

		Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
			stiffness: 1,
			length: 1,
			render: { type: "line" },
			chamfer: 2,
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
				stiffness: 0.15,
			})
		);

		Composite.add(
			ropeA,
			Constraint.create({
				bodyB: ropeA.bodies[99],
				pointB: { x: 0, y: 0 },
				pointA: {
					x: ropeA.bodies[99].position.x,
					y: ropeA.bodies[99].position.y,
				},
				stiffness: 0.15,
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

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: window.innerWidth / 2, y: window.innerHeight },
		});

		// context for MatterTools.Demo
		return {
			engine: engine,
			runner: runner,
			render: render,
			canvas: render.canvas,
			stop: function () {
				Matter.Render.stop(render);
				Matter.Runner.stop(runner);
			},
		};
	}, []);

	return (
		<div ref={boxRef} className="absolute top-[-100px] left-0 z-10">
			<canvas ref={canvasRef} />
		</div>
	);
}
