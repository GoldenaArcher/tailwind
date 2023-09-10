# Tailwind 练手项目 2

这次换了个 up 又滚完了一遍 tailwind，算是拾遗补缺了，之前的笔记：

- [Tailwind CSS 速成](https://blog.csdn.net/weixin_42938619/article/details/132730438)
- [Tailwind 练手项目](https://blog.csdn.net/weixin_42938619/article/details/132764130)

代码在：<https://github.com/GoldenaArcher/tailwind>，这次偷懒了就没在线效果（耸肩

首先说两点我看完 up 视频，比较喜欢的点：

1. flex 结构基本上就是用这个模板：`flex flex-col m-6 space-y-10 md:flex-row md:space-y-0 md:m-0"`，这个布局是小屏幕上上下分布，中型屏幕以上左右分布的常规套路。`space-<x, y>-<num>` 是一个工具类名，用来控制所有子类的 margin，官方文档的例子是： `space-y-1 > * + *	margin-top: 0.25rem; /* 4px */;`。

2. 没有多加无意义的 breakpoints，都是以 mobile first 的设计理念

3. 终于用了 directives

   我找了一下，除了排版会放在一起之外，加到 `@layer` 里的 CSS 会对 `:` 有效，如假设将 `btn` 加到 `@layer components {}` 中，那么就可以直接使用状态

   这点其实我还没太理解，原文是这个：

   > Wrapping any custom CSS with @layer also makes it possible to use modifiers with those rules, like `hover:` and `focus:` or responsive modifiers like `md:` and `lg:`.

   是说内部可以直接实现移动端 CSS，不需要再用 `media-query`？那看来直接 override 没办法这么做……？

4. 状态的嵌套，如：`dark:md:hover:bg-fuchsia-600`
5. 介绍了插件，这里在一个项目利用了 `line-clamp` 这个插件，主要就是当内容太多了可以省略。不过现在的版本，line-clamp 是自带的，不需要使用额外的 plugin

我不太喜欢的一点是会添加额外的 claa 做样式，理论上来说用 pseudo-element，HTML 的结构会更加干净一点，不过这个 up 好喜欢用 `group>div+div+div` 这样的结构去做样式啊……

案例我就直接丢实现了，都是一些老生常谈的点，之前 responsive+小项目写太多了……

## 小项目代码 & 对比

### subscribe email

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Subscribe</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- container -->
    <div class="flex items-center justify-center h-screen bg-zinc-700">
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div class="flex flex-col md:flex-row rounded-l-xl">
          <img
            src="images/image copy.jpg"
            alt=""
            class="object-cover rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
          <div class="p-6 md:p-12">
            <h1
              class="font-serif text-xl font-medium text-center text-white md:text-left"
            >
              Get diet and fitness tips in your inbox
            </h1>
            <p
              class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left"
            >
              Sint praesentium nihil deserunt natus quos sint vero repellendus
              possimus.
            </p>

            <div
              class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0"
            >
              <input
                type="text"
                name=""
                placeholder="Enter your Email"
                id=""
                class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />

              <button
                class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/bfdb143026aa4d498f81090411ef1381.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/1ee81c2e284e4d5ea1344675a53c628a.png)

### image gallery

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Image Gallery</title>
  </head>
  <body>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-cyan-50">
      <!-- Card Container -->
      <div class="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <!-- Menu Container -->
        <div
          class="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end"
        >
          <!-- Menu Items -->
          <div class="group">
            <a href="#">Vector</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Illustrations</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Images</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Icons</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
        </div>

        <!-- Search Container -->
        <div
          class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0"
        >
          <!-- Input and SVG Container -->
          <div class="flex justify-between border-b">
            <input
              type="text"
              class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>

          <!-- Upload Button -->
          <button
            class="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
          >
            Upload
          </button>
        </div>

        <!-- Gallery Container -->
        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <!-- Image 1 -->
          <div class="relative group">
            <img src="images/image1.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <!-- Image 2 -->
          <div class="relative group">
            <img src="images/image2.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <!-- Image 3 -->
          <div class="relative group">
            <img src="images/image3.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <!-- Image 4 -->
          <div class="relative group">
            <img src="images/image4.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <!-- Image 5 -->
          <div class="relative group">
            <img src="images/image5.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <!-- Image 6 -->
          <div class="relative group">
            <img src="images/image6.jpg" alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/a1e93d096c4f4bc38ae0bc7fbc955f59.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/652e4718f3ef4018aa487fac0b8ad81b.png)

### login modal

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&family=Rokkitt:wght@600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script>
      tailwind.config = {
        theme: {
          fontFamily: {
            sans: ['Mulish', 'sans-serif'],
            mono: ['Rokkitt', 'monospace'],
          },
        },
      };
    </script>
    <title>Login Modal</title>
  </head>
  <body>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-rose-50">
      <!-- Card Container -->
      <div
        class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        <!-- Left Side -->
        <div class="p-6 md:p-20">
          <!-- Top Content -->
          <h2 class="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            type="text"
            class="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />

          <!-- Middle Content -->
          <div
            class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0"
          >
            <div class="font-thin text-cyan-700">Forgot password</div>

            <button
              class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <!-- Border -->
          <div class="mt-12 border-b border-b-gray-300"></div>

          <!-- Bottom Content -->
          <p class="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>

          <!-- Bottom Buttons Container -->
          <div
            class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0"
          >
            <button
              class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
            >
              <img src="images/facebook.png" alt="" class="w-9" />
              <span class="font-thin">Facebook</span>
            </button>
            <button
              class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
            >
              <img src="images/google.png" alt="" class="w-9" />
              <span class="font-thin">Google</span>
            </button>
          </div>
        </div>

        <!-- Right Side -->
        <img src="images/image.jpg" alt="" class="w-[430px] hidden md:block" />

        <!-- Close Button -->
        <div
          class="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/830212e4e67f49c79fc4c99c0004c572.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/d3be7ed5bb474996be60a63be1ecdfca.png)

### pricing card

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pricing Cards</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- container -->
    <div class="flex items-center justify-center bg-slate-800 min-h-screen">
      <!-- card container -->
      <div
        class="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:my-0 md:flex-row"
      >
        <!-- card 1 -->
        <div class="bg-slate-700 rounded-xl text-white">
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Basic</div>
            <h2 class="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 class="mt-2 text-center">$1.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="text-white inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200"
                >Purchase</a
              >
            </div>
          </div>

          <!-- border -->
          <div class="border-t border-slate-700"></div>

          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <ul class="flex flex-col space-y-2">
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">100 GB of storage</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- card 2 -->
        <div class="bg-violet-600 rounded-xl text-white">
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Standard</div>
            <h2 class="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 class="mt-2 text-center">$3.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="text-white inline-block px-10 py-3 my-6 text-center bg-violet-600 border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200"
                >Purchase</a
              >
            </div>
          </div>

          <!-- border -->
          <div class="border-t border-slate-700"></div>

          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <ul class="flex flex-col space-y-2">
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">100 GB of storage</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- card 3 -->
        <div class="bg-slate-700 rounded-xl text-white">
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Premium</div>
            <h2 class="mt-10 font-serif text-5xl text-center">2TB</h2>
            <h3 class="mt-2 text-center">$8.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="text-white inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200"
                >Purchase</a
              >
            </div>
          </div>

          <!-- border -->
          <div class="border-t border-slate-700"></div>

          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <ul class="flex flex-col space-y-2">
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">100 GB of storage</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </li>
              <li class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/8f0d3911e01440d28716ad0bfb907dd9.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/af64f6746e4f4479ac065c7f194ab620.png)

### product card

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Modal</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="flex items-center justify-center min-h-screen bg-slate-100">
      <div
        class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16"
      >
        <div class="">
          <img
            src="images/headphone.png"
            alt=""
            class="mx-auto hover:scale-105 duration-200 w-60"
          />
        </div>

        <div class="flex flex-col space-y-6">
          <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div
              class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full w-3/5 md:w-auto text-center mx-auto"
            >
              Free Shipping
            </div>

            <h2 class="max-w-sm text-2xl font-medium text-center md:text-left">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h2>
            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p class="line-through">$799</p>
              <p class="text-5xl font-bold">$599</p>
              <p class="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            <div class="group">
              <button
                class="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-bl-700 group-hover:border-t-blue-700 group-hover:shadow-lg"
              >
                <div
                  class="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700"
                >
                  Add to card
                </div>
              </button>
            </div>

            <div class="flex items-center space-x-3 group">
              <div
                class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
              ></div>
              <div class="text-sm">50+ pcs. in stock</div>
            </div>

            <div
              class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
            >
              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src="images/weight.png" alt="" class="w-8" />
                <span>Add to cart</span>
              </button>
              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src="images/heart.png" alt="" class="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/7a3ff1d7755b479ebeacd59c50d995ce.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/dadefe8272fe4f6692b63038cbcf0811.png)

## regular proj

这里就放一些 directives 的配置了。

config:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

实现的 css：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h3 {
    @apply mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl;
  }

  h5 {
    @apply mb-2 text-2xl font-bold text-darkGrayishBlue;
  }
}

.section-container {
  @apply max-w-6xl mx-auto text-center px-10;
}

.section-content {
  @apply max-w-3xl mx-auto leading-9 text-center text-grayishBlue;
}

.button-container {
  @apply flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4;
}

body {
  /* background-image: url('../images/bg-header-desktop.png');
  background-repeat: no-repeat;
  background-size: contain; */
  @apply bg-[url('../images/bg-header-desktop.png')] bg-no-repeat backim bg-contain;
}

@media (max-width: 576px) {
  body {
    /* background-image: url('../images/bg-header-mobile.png'); */
    @apply bg-[url('../images/bg-header-mobile.png')];
  }
}

.ficon:hover {
  filter: invert(53%) sepia(68%) saturate(434%) hue-rotate(121deg) brightness(
      101%
    ) contrast(94%);
}
```

我试了一下，背景图片两种写法都可以用，看个人倾向了。

稍微复杂一些的，tailwind 没有实现很多遍的，这种可以在 directive 中声明然后反复用，或者麻烦一点重复写也不是不行，我个人倾向前者。

### grid system

html 如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Alata&family=Barlow+Semi+Condensed:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
    <title>Testimonial Grid</title>
  </head>
  <body class="bg-gray-200">
    <!-- Global Container -->
    <div class="container mx-auto max-w-7xl p-2 md:p-10">
      <!-- Grid Container -->
      <div
        class="grid gap-6 grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4"
      >
        <!-- Box 1 -->
        <div class="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
          <!-- Quotes Image -->
          <img
            src="images/bg-pattern-quotation.svg"
            alt=""
            class="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
          <!-- Box Header -->
          <div class="flex z-10 space-x-4">
            <img
              src="images/image-daniel.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Daniel Clifford</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="relative z-10 mt-6 text-xl">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50 line-clamp-6">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
            officiis eum consectetur odio amet dolorem deleniti repellat
            expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
            totam sequi omnis deserunt? Sit nam molestiae excepturi,
            perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
            exercitationem tempora! "
          </p>
        </div>

        <!-- Box 2 -->
        <div class="p-10 rounded-xl bg-gray-600 md:col-span-1 lg:row-start-1">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-jonathan.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jonathan Walters</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            The team was very supportive and kept me motivated
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50 line-clamp-5">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
            necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
            consequuntur praesentium a est eum velit quos maiores ipsum facere
            tempora! "
          </p>
        </div>

        <!-- Box 3 -->
        <div
          class="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:col-span-2 lg:col-span-1 lg:row-span-2"
        >
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>

        <!-- Box 4 -->
        <div
          class="p-10 rounded-xl text-gray-900 bg-white md:col-span-1 md:row-start-2 md:col-start-2 lg:col-start-1"
        >
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-jeanette.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jeanette Harmon</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            An overall wonderful and rewarding experience
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>

        <!-- Box 5 -->
        <div class="p-10 rounded-xl bg-gray-900 md:col-span-2">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-patrick.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Patrick Abrams</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>

        <!-- Box 6 -->
        <div class="p-10 rounded-xl text-gray-900 bg-white md:hidden">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Alata&family=Barlow+Semi+Condensed:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
    <title>Testimonial Grid</title>
  </head>
  <body class="bg-gray-200">
    <!-- Global Container -->
    <div class="container mx-auto max-w-7xl p-2 md:p-10">
      <!-- Grid Container -->
      <div
        class="grid gap-6 grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4"
      >
        <!-- Box 1 -->
        <div class="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
          <!-- Quotes Image -->
          <img
            src="images/bg-pattern-quotation.svg"
            alt=""
            class="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
          <!-- Box Header -->
          <div class="flex z-10 space-x-4">
            <img
              src="images/image-daniel.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Daniel Clifford</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="relative z-10 mt-6 text-xl">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50 line-clamp-6">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
            officiis eum consectetur odio amet dolorem deleniti repellat
            expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
            totam sequi omnis deserunt? Sit nam molestiae excepturi,
            perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
            exercitationem tempora! "
          </p>
        </div>

        <!-- Box 2 -->
        <div class="p-10 rounded-xl bg-gray-600 md:col-span-1 lg:row-start-1">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-jonathan.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jonathan Walters</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            The team was very supportive and kept me motivated
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50 line-clamp-5">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
            necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
            consequuntur praesentium a est eum velit quos maiores ipsum facere
            tempora! "
          </p>
        </div>

        <!-- Box 3 -->
        <div
          class="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:col-span-2 lg:col-span-1 lg:row-span-2"
        >
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>

        <!-- Box 4 -->
        <div
          class="p-10 rounded-xl text-gray-900 bg-white md:col-span-1 md:row-start-2 md:col-start-2 lg:col-start-1"
        >
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-jeanette.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Jeanette Harmon</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            An overall wonderful and rewarding experience
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>

        <!-- Box 5 -->
        <div class="p-10 rounded-xl bg-gray-900 md:col-span-2">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-patrick.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Patrick Abrams</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>

        <!-- Box 6 -->
        <div class="p-10 rounded-xl text-gray-900 bg-white md:hidden">
          <!-- Box Header -->
          <div class="flex space-x-4">
            <img
              src="images/image-kira.jpg"
              alt=""
              class="w-10 h-10 rounded-full ring-2 ring-purple-300"
            />
            <div class="text-sm">
              <h4 class="opacity-90">Kira Whittle</h4>
              <p class="opacity-50">Verified Graduate</p>
            </div>
          </div>

          <!-- Large Text -->
          <p class="mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>

          <!-- Small Text -->
          <p class="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

这里我把原本的布局改了，中屏幕以下是一列的结构，中屏幕我改成了两列，大屏幕改成了四列，主要是从内容的字数上来说我觉得这么改比较好看：

![在这里插入图片描述](https://img-blog.csdnimg.cn/b6ce5382fac14419851a64a159dae696.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/3662fcb29dc245a6a2b7270a992f55f1.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/984cfcac251243c7b5e962e548bb0960.png)

原本就直接从 col-1 跳到了 col-4，但是 md 上我觉得一些卡片留白太多了

### 不需要 JS 的特效

![在这里插入图片描述](https://img-blog.csdnimg.cn/38386fcdbcf2404cb316b3275e0b0090.gif#pic_center)

这个特效是通过一个叫做 `group:focus` 的特效做的：

```html
<div class="py-1 border-b outline-none group" tabindex="4">
  <!-- Tab Flex Container -->
  <div
    class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
  >
    <!-- Tab Title -->
    <div class="transition duration-500 ease group-hover:text-red-500">
      What about other Chromium browsers
    </div>
    <!-- Arrow -->
    <div
      class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          d="M1 1l8 8 8-8"
        />
      </svg>
    </div>
  </div>

  <!-- Tab Inner Content -->
  <div
    class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
  >
    <p class="py-2 text-justify text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat
      amet doloribus consequuntur eos similique provident tempora voluptates
      iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id
      suscipit labore?
    </p>
  </div>
</div>
```

我本来还以为是通过 JS 实现的……妙啊……
