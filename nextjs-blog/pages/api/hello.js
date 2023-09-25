import { roundToNearestMinutes } from "date-fns";

export default  function handler(req, res) {
    res.status(200).json({ text: 'Hello!' });
}

// NEVER fetch an API route in getStaticPaths or getStaticProps - these ONLY run
//     server-side so are not included in the bundle. So... there's no point
//     because API routes are called client-side.

// API routes can be good at handling form input.

// Good for PREVIEW MODE

// API routes can be dynamic just like regular routes
