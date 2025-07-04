import { posts } from "./posts.js";
const featuredPosts = document.getElementById("featured-posts");

const currentYear = new Date().getFullYear();
// Index.html
function getFeaturedPostsHtml() {
  const filteredPosts = posts.filter((post) => {
    return post.type === "TryHackMe" || post.type === "AI";
  })
  return filteredPosts.map((post) => {
    if (post.type === "TryHackMe" || post.type === "AI") {
      return `
            <a href="${post.link}" target="_blank" class="flex flex-1">
                <div class="group w-full bg-[#2a2e35] rounded-lg overflow-hidden duration-300 hover:-translate-y-1">
                    <img class="w-full h-[200px] object-cover md:grayscale-55 transition duration-300 ease-in-out group-hover:grayscale-0" alt="${post.alt}" src="${post.src}" />
                    <div class="px-4 pb-4">
                        <h2 class="font-bold text-[var(--primary-color)] text-lg md:text-xl mt-4">${post.title}</h2>
                        <p class="bg-[var(--primary-color)] px-3 py-1 rounded-2xl text-xs inline-block my-4">${post.type}</p>
                        <p>${post.desc}</p>
                    </div>
                </div>
            </a>`;
    }
  }).slice(0, 3);
}

function renderFeatured() {
  featuredPosts.innerHTML = getFeaturedPostsHtml().join("");
}

function renderCopyright() {
  document.getElementById("footer").innerHTML =
    `<p class="text-center text-[var(--gray-font)] my-4 text-xs md:text-base">Copyright &copy; ${currentYear} MakaylaDecoded. All rights reserved.</p>`;
}

renderCopyright();
renderFeatured();
