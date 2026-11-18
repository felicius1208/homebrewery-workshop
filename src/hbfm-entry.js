import { hbfm } from 'marked-hbfm';
window.HBFM = {
  render: (t, i) => hbfm.render(t, i),
  firstLineTags: (line) => {
    const toks = hbfm.marked.lexer(line)[0];
    const arr = toks && toks.tokens;
    const hit = arr && arr.find(o => o.injectedTags !== undefined);
    return hit ? hit.injectedTags : null;
  }
};
