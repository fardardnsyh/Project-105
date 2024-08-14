import {
  MDXEditor,
  RealmPlugin,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

type Props = {
  markdown: string;
  onChange: (value: string) => void;
  plugins?: RealmPlugin[];
  placeholder?: string;
  className?: string;
};

const MarkdownEditor = ({
  markdown,
  onChange,
  plugins = [
    headingsPlugin(),
    listsPlugin(),
    quotePlugin(),
    thematicBreakPlugin(),
    markdownShortcutPlugin(),
  ],
  placeholder = "",
  className = "border rounded text-sm max-h-72 overflow-y-auto",
}: Props) => {
  return (
    <MDXEditor
      markdown={markdown}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      plugins={plugins}
    />
  );
};

export default MarkdownEditor;
