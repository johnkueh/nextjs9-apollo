const posts = [
  {
    title: "Next.js is awesome"
  },
  {
    title: "API support is really great"
  }
];

export default (req, res) => {
  res.status(200).json(posts);
};
