import { posts } from "./posts.js";
const blogPostSection = document.getElementById("blog-post-section");
const allBtn = document.getElementById("all-btn");
const thmBtn = document.getElementById("thm-btn");
const awsBtn = document.getElementById("aws-btn");
const aiBtn = document.getElementById("ai-btn");
let postsToRender = "all";
const currentYear = new Date().getFullYear();

allBtn.addEventListener("click", () => {
  postsToRender = "all";
  renderPosts();
})

thmBtn.addEventListener("click", () => {
  postsToRender = "TryHackMe";
  renderPosts();
})

awsBtn.addEventListener("click", () => {
  postsToRender = "AWS";
  renderPosts();
})

aiBtn.addEventListener("click", () => {
  postsToRender = "AI";
  renderPosts();
})
function getBlogPostsHtml() {
  return posts.map((post) => {
    if (post.type === postsToRender || postsToRender === "all") {
      return `
            <a href="${post.link}" class="flex flex-1">
                <div class="group w-full bg-[#2a2e35] rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1">
                    <img class="w-full h-[200px] object-cover md:grayscale-55 transition duration-300 ease-in-out group-hover:grayscale-0" alt="${post.alt}" src="${post.src}" />
                    <div class="px-4 pb-4">
                        <h2 class="font-bold text-[var(--primary-color)] text-xl mt-4">${post.title}</h2>
                        <p class="bg-[var(--primary-color)] px-3 py-1 rounded-2xl text-sm inline-block my-4">${post.type}</p>
                        <p>${post.desc}</p>
                    </div>
                </div>
            </a>`;
    }
  });
}

function renderPosts() {
  blogPostSection.innerHTML = getBlogPostsHtml().join("");
}

function renderCopyright() {
  document.getElementById("footer").innerHTML =
    `<p class="text-center text-[var(--gray-font)] my-4 text-xs md:text-base">Copyright &copy; ${currentYear} MakaylaDecoded. All rights reserved.</p>`;
}
renderCopyright();
renderPosts();
