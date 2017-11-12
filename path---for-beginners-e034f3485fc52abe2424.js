webpackJsonp([94257825085614],{512:function(n,a){n.exports={data:{markdownRemark:{html:'<p>This section explores one way how to build UIs without assuming a lot of prior knowledge. If you’re already familiar with React and the flux pattern (e.g. Redux), check out the <a href="/prior-art">Prior art</a> section.</p>\n<h2 id="part-1---functional-approach-to-building-uis"><a href="#part-1---functional-approach-to-building-uis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 1 - Functional approach to building UIs</h2>\n<p><a href="https://reactjs.org/" target="_blank" rel="nofollow noopener noreferrer">React.js</a> has revolutionised UI development. It might not be the final paradigm. It doesn’t mean we shouldn’t explore new ideas. But right now – React is awesome.</p>\n<p>If you’re not familiar with React, here is the core idea. <em>In React - your entire UI is a function that takes some <code>state</code> and returns the entire screen</em>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">fn</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You don’t even need React to apply this idea. Let’s explore this a bit further without bringing React in. Let’s implement such UI function and insert it’s rendered content into the page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`\n  &lt;div>Logo&lt;/div>\n`</span></span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`\n  &lt;div id=\'App\'>\n    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n    &lt;h1>Count: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1>\n  &lt;/div>\n`</span></span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>That’s it. If you want to render the app with different <code>state</code>, call <code>App()</code> again. That’s kind of the concept behind React. But React does a fair bit more to help us in real world situations:</p>\n<ul>\n<li>it helps us handle user events</li>\n<li>makes it easy to nest individual components</li>\n<li>has hooks for when components are added or removed from the page </li>\n<li>it uses a virtual dom underneath which makes this all very efficient</li>\n</ul>\n<p>So let’s rewrite our small example app in React.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> ReactDOM <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-dom\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div<span class="token operator">></span>Logo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">\'App\'</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>h1<span class="token operator">></span>Count<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You can imagine composing complex applications from many of these React components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token punctuation">,</span> repo<span class="token punctuation">,</span> org <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Container<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Header user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>RepoHeader org<span class="token operator">=</span><span class="token punctuation">{</span>org<span class="token punctuation">}</span> repo<span class="token operator">=</span><span class="token punctuation">{</span>repo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Tabs<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button<span class="token operator">></span>Code<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button<span class="token operator">></span>Issues<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button<span class="token operator">></span>PullRequests<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Description <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>RepoSummaryBar <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>FileBrowser repo<span class="token operator">=</span><span class="token punctuation">{</span>repo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Readme <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>\n<span class="token punctuation">)</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>But at the core, you can see how <code>App</code> is still a function that takes state and outputs the entire UI - <code>fn(state)</code>.</p>\n<p>Why is that important? Because it’s simple. You can think of each smaller part of the app as another function. And each one of them are these pure, stateless functions. They take some arguments, return some UI. It’s easy to reason about each such function as long as you keep the state outside.</p>\n<h2 id="part-2---state-management"><a href="#part-2---state-management" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Part 2 - State management</h2>\n<p>What we saw in Part 1 is all great and good. But in real world applications, the <code>state</code> changes all the time. For example:</p>\n<ul>\n<li>the server ‐ someone posts a comment</li>\n<li>UI interaction ‐ you click “Merge PR”</li>\n<li>VR interaction ‐ you turn your head</li>\n<li>side effect ‐ a game engine ticks and updates the world state</li>\n</ul>\n<p>How do you keep the UI up to date.</p>\n<p>This is static:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App state<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>But this you can call again and again:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App state<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>So what if we create an <code>update</code> function that can update the state and rerender the app. We can then pass this <code>update</code> function to the App and it can call it whenever it needs to change the state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span>nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> state<span class="token punctuation">,</span> update <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>Count<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App state<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span> update<span class="token operator">=</span><span class="token punctuation">{</span>update<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Bam! Whenever some app component needs to update the state it can do so with the <code>update</code> function. For example, incrementing a counter after user clicked a button. Or storing a server response for other components to render. This would then in turn cause the entire application to rerender with the new <code>state</code>.</p>\n<p>The single state store approach is what <strong>Tiny Atom</strong> helps utilise in your applications. With <strong>Tiny Atom</strong> this same example will look more like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> atom <span class="token operator">=</span> <span class="token function">createAtom</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> render<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> state<span class="token punctuation">,</span> split <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>Count<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App state<span class="token operator">=</span><span class="token punctuation">{</span>atom<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> split<span class="token operator">=</span><span class="token punctuation">{</span>atom<span class="token punctuation">.</span>split<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Additionally, <strong>Tiny Atom</strong> provides ability to use actions which are self contained pieces of logic that can transition the <code>state</code> from one state to the next. You can read more about the actual real world usage of <strong>Tiny Atom</strong> in the <a href="/basics">Basics</a> section.</p>\n<h2 id="try-it-out"><a href="#try-it-out" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try it out</h2>\n<p>If you’re new to JavaScript UI development, here are steps for getting a Hello World application running in your browser.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>$ npm install ‐g jetpack\n$ mkdir hello<span class="token operator">-</span>world <span class="token operator">&amp;&amp;</span> cd hello<span class="token operator">-</span>world\n$ npm init\n$ npm install react react‐dom tiny‐atom\n$ echo <span class="token string">"ReactDOM.render(&lt;p>Hi&lt;/p>, document.body)"</span> <span class="token operator">></span> index<span class="token punctuation">.</span>js\n$ jetpack <span class="token punctuation">.</span>\n$ open http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">3000</span>\n</code></pre>\n      </div>\n<p>Build great apps!</p>',excerpt:"This section explores one way how to build UIs without assuming a lot of prior knowledge. If you’re already familiar with React and the flux…",timeToRead:4,frontmatter:{title:"For beginners"},parent:{__typename:"File",relativePath:"for-beginners.md"}}},pathContext:{slug:"/for-beginners/"}}}});
//# sourceMappingURL=path---for-beginners-e034f3485fc52abe2424.js.map