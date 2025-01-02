import TS1 from "../images/a1.jpeg";
import TS2 from "../images/a2.jpeg";
import TS3 from "../images/a3.png";
import Author1 from "../images/author1.jpg";
import Author2 from "../images/author2.jpg";
import Author3 from "../images/author3.jpg";
import Link from "next/link";
export default function RecentPosts() {
  return (
    <section className="recent-posts py-16">
      <div className="section-title text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span>All Stories</span>
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-center">
          <section className="py-4 ">
            <div className="container mx-auto px-4">
              <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-wrap -mx-4">
                  {/* Post 5 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                    <div className="card bg-white rounded-lg shadow-lg">
                      <Link href="../Posts/Post5">
                        <div className="img-fluid bg-gray-800 h-64">
                          <img className="w-full h-full" src={TS1.src} alt="" />
                        </div>
                      </Link>
                      <div className="card-block p-4">
                        <h2 className="card-title text-xl font-semibold">
                          <Link href="../Posts/Post5">
                            Beginner's Guide to Building Your First Website
                          </Link>
                        </h2>
                        <h4 className="card-text text-gray-600 mt-2">
                          Building your first website is an exciting milestone!
                          Whether you’re pursuing web.
                        </h4>
                        <div className="metafooter mt-4">
                          <div className="wrapfooter flex items-center justify-between">
                            <span className="meta-footer-thumb">
                              <Link href="../Posts/Post5">
                                <div className="author-thumb bg-gray-300 w-12 h-12 rounded-full">
                                  <img
                                    className="w-full h-full"
                                    src={Author1.src}
                                    alt=""
                                  />
                                </div>
                              </Link>
                            </span>
                            <span className="author-meta">
                              <span className="post-name text-sm font-medium">
                                <Link href="../Posts/Post5">Sal</Link>
                              </span>
                              <br />
                              <span className="post-date text-xs text-gray-500">
                                22 July 2017
                              </span>
                              <span className="dot mx-1">•</span>
                              <span className="post-read text-xs text-gray-500">
                                6 min read
                              </span>
                            </span>
                            <span className="post-read-more">
                              <Link href="../Posts/Post5" title="Read Story">
                                <svg
                                  className="svgIcon-use w-5 h-5 text-gray-500"
                                  viewBox="0 0 25 25"
                                >
                                  <path
                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post 6 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                    <div className="card bg-white rounded-lg shadow-lg">
                      <Link href="../Posts/Post6">
                        <div className="img-fluid bg-gray-300 h-64">
                          <img
                            className="w-full h-full"
                            src={TS2.src}
                            alt=""
                          />
                        </div>
                      </Link>
                      <div className="card-block p-4">
                        <h2 className="card-title text-xl font-semibold">
                          <Link href="../Posts/Post6">
                            The Role of AI in Modern Web Development
                          </Link>
                        </h2>
                        <h4 className="card-text text-gray-600 mt-2">
                          Artificial Intelligence (AI) is transforming modern
                          web development in remarkable ways.
                        </h4>
                        <div className="metafooter mt-4">
                          <div className="wrapfooter flex items-center justify-between">
                            <span className="meta-footer-thumb">
                              <Link href="../Posts/Post6">
                                <div className="author-thumb bg-gray-300 w-12 h-12 rounded-full">
                                  <img className="w-full h-full" src={Author2.src} alt="" />
                                </div>
                              </Link>
                            </span>
                            <span className="author-meta">
                              <span className="post-name text-sm font-medium">
                                <Link href="../Posts/Post6">Alex Johnson</Link>
                              </span>
                              <br />
                              <span className="post-date text-xs text-gray-500">
                                22 July 2017
                              </span>
                              <span className="dot mx-1">•</span>
                              <span className="post-read text-xs text-gray-500">
                                6 min read
                              </span>
                            </span>
                            <span className="post-read-more">
                              <Link href="../Posts/Post6" title="Read Story">
                                <svg
                                  className="svgIcon-use w-5 h-5 text-gray-500"
                                  viewBox="0 0 25 25"
                                >
                                  <path
                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post 7 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
                    <div className="card bg-white rounded-lg shadow-lg">
                      <Link href="../Posts/Post7">
                        <div className="img-fluid bg-gray-300 h-64">
                          <img
                            className="w-full h-full"
                            src={TS3.src}
                            alt=""
                          />
                        </div>
                      </Link>
                      <div className="card-block p-4">
                        <h2 className="card-title text-xl font-semibold">
                          <Link href="../Posts/Post7">
                            Best Practices for Responsive Web Design
                          </Link>
                        </h2>
                        <h4 className="card-text text-gray-600 mt-2">
                          Responsive web design is a fundamental aspect of
                          modern web development. 
                        </h4>
                        <div className="metafooter mt-4">
                          <div className="wrapfooter flex items-center justify-between">
                            <span className="meta-footer-thumb">
                              <Link href="../Posts/Post7">
                                <div className="author-thumb bg-gray-300 w-12 h-12 rounded-full">
                                  <img className="w-full h-full" src={Author3.src} alt="" />
                                </div>
                              </Link>
                            </span>
                            <span className="author-meta">
                              <span className="post-name text-sm font-medium">
                                <Link href="../Posts/Post7">Sal</Link>
                              </span>
                              <br />
                              <span className="post-date text-xs text-gray-500">
                                22 July 2017
                              </span>
                              <span className="dot mx-1">•</span>
                              <span className="post-read text-xs text-gray-500">
                                6 min read
                              </span>
                            </span>
                            <span className="post-read-more">
                              <Link href="../Posts/Post7" title="Read Story">
                                <svg
                                  className="svgIcon-use w-5 h-5 text-gray-500"
                                  viewBox="0 0 25 25"
                                >
                                  <path
                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </section>
  );
}
