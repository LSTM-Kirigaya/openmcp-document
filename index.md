---
layout: doc
---

<NewHomeHero />

<div class="home-wrapper">

<h2 id="home-0">
Resolve Issues in Your MCP Agent Development
<br>
<span>Providing Fun and Convenience for Your MCP Agent Development</span>
</h2>

<div class="video-container">
<iframe width="90%" height="580" src="https://www.youtube.com/embed/S7igsEhcLiw?si=6sqvbYJxSRoFS26g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h2 id="home-1">
Who is OpenMCP for?
<br>
<span>The Development of OpenMCP is for ...</span>
</h2>

<KTab class="home-tab">
<TwoSideLayout
  label="Professional Software Engineers"
  :texts="[
    'Shift testing left integrates development and testing seamlessly with rich features, no third-party tools needed.',
    'Easily manage, debug, and test AI agents via the left-hand panel.',
    'Monitor LLM tool details and instantly reproduce unsatisfactory results with one click.',
    'Track performance metrics per conversation for better cost control.',
    'Build AI agent apps effortlessly using MCP servers and system prompts via the management panel.'
  ]"
  image="./images/openmcp.xml.png"
/>
<TwoSideLayout
  label="Open - Source Community Enthusiasts"
  :texts="[
    'Shift-left testing integrates dev and testing without third-party tools, packed with rich features.',
    'OpenMCP is fully open-source—use it free or collaborate to build agent innovations.',
    'Full technical transparency protects your ideas and tokens from plagiarism risks.',
    'Persistent prompt management lets you test and share real MCP server prompts.',
    'Every test is Git-versioned for easy sharing and zero-cost replication of MCP projects.'
  ]"
  image="./images/openmcp.chatbot.png"
/>
<TwoSideLayout
  label="AI Research Scientists"
  :texts="[
    'Shift-left testing integrates development and testing without third-party tools, offering rich features.',
    'Convert research into MCP servers with minimal code, linking any LLM for a seamless UI.',
    'Auto-track experiments & configs in Git for reproducible, traceable research.',
    'OpenMCP accelerates demos, bridging innovation and deployment.'
  ]"
  image="./images/openmcp.resource.png"
/>
</KTab>

<h2 id="home-2">
FAQ
<br>
<span>Waiting for Your Questions</span>
</h2>

<el-collapse>
  <el-collapse-item title="What is OpenMCP suitable for?" name="1">
    As its name suggests, OpenMCP is an MCP debugger and SDK for developers, committed to reducing the full - chain development cost of AI agents and the mental burden of developers. Our mission is to create MCP tools that can solve real - life problems and save working time through OpenMCP, or help engineers and research scientists deliver demos more quickly and make this vision visible to the public.
  </el-collapse-item>
  <el-collapse-item title="Is OpenMCP free?" name="2">
    Yes, OpenMCP is completely open - source. You can not only use this product for free but also join us to realize your creative ideas about agents. The task of OpenMCP is to build an ecosystem around MCP. We believe that MCP development will be a highly customized task in the future, so our current focus is not to rush to create an all - purpose agent, but to steadily build the relevant ecosystem and infrastructure.
  </el-collapse-item>
  <el-collapse-item title="What is OpenMCP not suitable for?" name="3">
    If you try to develop an all - purpose, general AI agent through OpenMCP, you should invest all your money in the research and development of quantum computers instead of visiting this website. Remember, in this era, developing a full - domain general AI agent is likely to be equivalent to telecom fraud.
  </el-collapse-item>
  <el-collapse-item title="Who is developing OpenMCP?" name="4">
    <p>OpenMCP was initially led by LSTM - Kirigaya (Jinhui) for building MCP testing tools related to 3D work. Its main participants include employees from large companies, students majoring in computer - related fields at universities, and some active contributors from the open - source community.</p>
    <p>Identity is not important. I'd like to share a quote with you: "Don't tell me if you can do it. Tell me if you like it."</p>
    <img src="https://pica.zhimg.com/80/v2-3666e84b2f92bf444a5eb64fb9d08e71_1440w.png" style="max-width: 500px;margin-top:10px;"/>
  </el-collapse-item>
  <el-collapse-item title="How can I join you or participate in discussions?" name="5">
    You can learn how to participate in the maintenance and development of OpenMCP through <a href="https://kirigaya.cn/openmcp/preview/join.html" target="_blank">Participate in OpenMCP</a>. Obtain our contact information through <a href="https://kirigaya.cn/openmcp/preview/channel.html" target="_blank">Resource Channel</a>. Currently, there are three main communities: QQ group: 782833642, <a href="https://discord.com/invite/SKTZRf6NzU" target="_blank">OpenMCP Discord Channel</a>, and <a href="https://www.zhihu.com/ring/host/1911121615279849840" target="_blank">Zhihu Circle [OpenMCP Museum]</a>
  </el-collapse-item>
  <el-collapse-item title="How to contact us for cooperation?" name="6">
    For cooperation, please contact Jinhui's personal email: 1193466151@qq.com
  </el-collapse-item>
</el-collapse>

</div>

<style>
/* 强制内容容器全宽 */
.VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.VPDoc .content {
  max-width: 100% !important;
}

.VPDoc.has-aside .aside {
  display: none !important;
}

/* 首页包装器 - 深色背景 */
.home-wrapper {
  position: relative;
  z-index: 1;
  background: #0a0a0f;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 4rem 0;
}

/* 内容区域 */
.vp-doc {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 标题样式 */
.home-wrapper h2 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 4rem 0 2rem;
  color: #fff;
}

.home-wrapper h2 span {
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;
}

/* 视频容器 */
.video-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 2rem 0;
}

.video-container iframe {
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

/* 响应式 */
@media (max-width: 768px) {
  .vp-doc {
    padding: 0 1rem;
  }
  
  .home-wrapper h2 {
    font-size: 1.75rem;
  }
  
  .video-container iframe {
    height: 300px;
  }
}

/* 隐藏文档布局元素 */
.VPDoc .VPDocAside,
.VPDoc .VPDocOutlineDropdown {
  display: none !important;
}

.VPDoc .VPDocMain {
  padding-left: 0 !important;
}

.VPDoc .content-container {
  max-width: 100% !important;
}

/* el-collapse 深色样式 */
.home-wrapper .el-collapse {
  background: transparent !important;
  border: none !important;
}

.home-wrapper .el-collapse-item__header {
  background: rgba(255, 255, 255, 0.05) !important;
  color: #fff !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 1.1rem !important;
  padding: 1rem 1.5rem !important;
}

.home-wrapper .el-collapse-item__wrap {
  background: rgba(255, 255, 255, 0.02) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.home-wrapper .el-collapse-item__content {
  color: rgba(255, 255, 255, 0.8) !important;
  padding: 1.5rem !important;
  font-size: 1rem !important;
  line-height: 1.8 !important;
}

.home-wrapper .el-collapse-item__content a {
  color: #a5b4fc !important;
}
</style>
