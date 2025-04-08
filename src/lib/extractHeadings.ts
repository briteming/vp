import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";

export const extractHeadings = (content: string) => {
  const tree = unified().use(remarkParse).parse(content);
  const headings: { text: string; level: number; id: string }[] = [];

  function extractText(node: any): string {
    if (node.type === "text") return node.value;
    if (node.children) return node.children.map(extractText).join("");
    return "";
  }

  function visit(node: any) {
    if (node.type === "heading") {
      const text = extractText(node);
      const id = text.toLowerCase().replace(/\s+/g, "-");
      headings.push({ text, level: node.depth, id });
    }
    if (node.children) node.children.forEach(visit);
  }

  visit(tree);
  return headings;
};

export const getPostHeadings = (slug: string) => {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  return extractHeadings(content);
};
