import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* // Jumbotron */}
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-24 mx-auto max-w-screen-xl text-center py-24 lg:py-56 lg:text-justify">
                    <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Kami mewujudkan <br /> pakaian impianmu
                    </h1>
                    <p className="mb-8 text-sm font-normal text-gray-300 leading=none lg:text-xl sm:px-16 lg:px-0">
                        Di Kuka kami membuat pakaian impianmu menjadi nyata{" "}
                        <br /> dengan menggunakan bahan-bahan terbaik.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link
                            href="/service"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Layanan Kami
                            <svg
                                aria-hidden="true"
                                className="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            {/* // End Jumbotron */}

            {/* // Merits */}
            <section className="my-24">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg
                            className="w-10 h-10 mb-2 mx-auto text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 21 21"
                        >
                            <path d="M20.817 9.085a10 10 0 0 0-19.77 2.9A10.108 10.108 0 0 0 6.762 20a9.689 9.689 0 0 0 4.2 1h.012a3.011 3.011 0 0 0 2.144-.884A2.968 2.968 0 0 0 14 18v-.86A1.041 1.041 0 0 1 15 16h2.7a2.976 2.976 0 0 0 2.838-2.024 9.93 9.93 0 0 0 .279-4.891ZM5.5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.707-3.793a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm2.872-1.624a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.128 1.624a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Z" />
                        </svg>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Custom Pakaian
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Go to this step by step guideline process on how to
                            certify for your weekly benefits:
                        </p>
                    </div>

                    <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg
                            className="w-10 h-10 mb-2 mx-auto text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                        </svg>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Terpercaya
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Go to this step by step guideline process on how to
                            certify for your weekly benefits:
                        </p>
                    </div>

                    <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg
                            className="w-10 h-10 mb-2 mx-auto text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path d="M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                            <path d="M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                            <path d="M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                        </svg>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Harga Terjangkau
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Go to this step by step guideline process on how to
                            certify for your weekly benefits:
                        </p>
                    </div>
                </div>
            </section>
            {/* // End Merits */}

            {/* About */}
            <section class="flex flex-col items-center md:flex-row">
                <div class="md:w-1/2">
                    {/* <img src="gambar.jpg" alt="Gambar" class="w-full h-auto" /> */}
                </div>
                <div class="md:w-1/2 md:pl-8">
                    <h2 class="text-2xl font-bold mb-4">Tentang Kami</h2>
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed imperdiet lacus quis ipsum cursus, in fermentum nisi
                        tincidunt. Nulla gravida, nisl eu lobortis pharetra,
                        dolor justo lacinia erat, vel lacinia leo eros eget
                        purus.
                    </p>
                    <p class="mb-4">
                        Fusce viverra tortor vitae facilisis molestie. Duis sed
                        est id risus ultrices fermentum vel ac nunc. Mauris ut
                        lobortis est, vel faucibus mi. Morbi consequat tincidunt
                        libero, ac posuere urna varius sit amet.
                    </p>
                    <p class="mb-4">
                        Nullam convallis, odio eu euismod pharetra, nisl ante
                        tincidunt nunc, vitae rhoncus purus metus sed sem.
                        Curabitur rhoncus facilisis lobortis. Donec id tincidunt
                        massa. Vivamus sed tristique enim. Mauris eu nisi
                        varius, suscipit sapien vel, porta metus.
                    </p>
                </div>
            </section>
            {/* End About */}
        </main>
    );
}
