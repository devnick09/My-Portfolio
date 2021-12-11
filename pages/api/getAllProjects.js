// import { connectToDatabase } from "../../middleware/database";

// export default async (req, res) => {
//   const { db } = await connectToDatabase();
//   const projects = await db
//     .collection("projects")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   res.json(projects);
// };
