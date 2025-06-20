import { posts } from "./posts.js";
const blogPostSection = document.getElementById("blog-post-section");
const currentYear = new Date().getFullYear();

function getBlogPostsHtml() {
  return posts.map((post) => {
    return `
            <a href="${post.link}" class="flex flex-1">
                <div class="group w-full bg-[#2a2e35] rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1">
                    <img class="w-full h-[200px] object-cover md:grayscale-55 transition duration-300 ease-in-out group-hover:grayscale-0" alt="${post.alt}" src="${post.src}" />
                    <div class="px-4 pb-4">
                        <h2 class="font-bold text-[var(--primary-color)] text-xl my-4">${post.title}</h2>
                        <p>${post.desc}</p>
                    </div>
                </div>
            </a>`;
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
