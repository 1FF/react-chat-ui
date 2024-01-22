import MarkdownLink from '../src/components/Markdown/link';
import formatting from '../src/utils/formatting';
/* eslint-disable react/prop-types */
export const Markdown = ({ children }) => (formatting.constructLink(children) ? <MarkdownLink properties={ { href: formatting.constructLink(children) } }>{ children }</MarkdownLink> : <div>{ children }</div>);

export default Markdown;
// https://github.com/remarkjs/react-markdown/issues/635 using mock since the other
// option is to downgrade the package with the actual implementation
