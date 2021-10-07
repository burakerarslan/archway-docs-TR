/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
          <IconExternalLink />
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

const FooterLogo = ({sources, alt}) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
  const {footer} = useThemeConfig();
  // const {copyright, links = [], logo = {}} = footer || {};
  // const sources = {
  //   light: useBaseUrl(logo.src),
  //   dark: useBaseUrl(logo.srcDark || logo.src),
  // };

  if (!footer) {
    return null;
  }

  return (
    <footer className="footer" data-v-57399fcf>
      <div className="bg-dark tm-text" data-v-57399fcf>
        <div className="footer-top tm-container" data-v-57399fcf>
          <div className="footer-top__container" data-v-57399fcf>
            <div className="tm-rf7 tm-lh-title" data-v-57399fcf>Arch into Cosmos</div>
            <div className="mt-7" data-v-57399fcf>
              <a href="/updates" className="tm-rf1 tm-button tm-button__size__m tm-button__variant__underlined tm-lh-title tm-medium  tm-rf0" data-v-17ec6de6 data-v-57399fcf>
                <span className="tm-button__content" data-v-17ec6de6>SIGN UP FOR UPDATES</span>
              </a>
            </div>
            <div className="footer-top__row tm-rf2 tm-rf1-m-up" data-v-57399fcf>
              <div className="footer-top__col" data-v-57399fcf>
                <ul className="footer-top__list" data-v-57399fcf>
                  <li className="tm-rf2 tm-rf1-m-up tm-overline tm-medium" data-v-57399fcf>
                    <span className="footer-top__list-title" data-v-57399fcf>Archway</span>
                  </li>
                  <li data-v-57399fcf>
                    <a href="http://docs.archway.io/about" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>About</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="http://docs.archway.io/support" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Support</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/careers" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Careers</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/" aria-current="page" className="footer-top__link nuxt-link-exact-active nuxt-link-active tm-link" data-v-7ba02ca4 data-v-57399fcf>Press Kit</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/" aria-current="page" className="footer-top__link nuxt-link-exact-active nuxt-link-active tm-link" data-v-7ba02ca4 data-v-57399fcf>Brand Guidelines</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top__col" data-v-57399fcf>
                <ul className="footer-top__list" data-v-57399fcf>
                  <li className="tm-rf2 tm-rf1-m-up tm-overline tm-medium" data-v-57399fcf>
                    <span className="footer-top__list-title" data-v-57399fcf>Community</span>
                  </li>
                  <li data-v-57399fcf>
                    <a href="https://blog.archway.io" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Blog</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/community" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Community</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="http://forum.archway.io/" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Forum</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/" aria-current="page" className="footer-top__link nuxt-link-exact-active nuxt-link-active tm-link" data-v-7ba02ca4 data-v-57399fcf>Discord</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="https://twitter.com/archwayhq" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Twitter</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/" aria-current="page" className="footer-top__link nuxt-link-exact-active nuxt-link-active tm-link" data-v-7ba02ca4 data-v-57399fcf>Youtube</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="/" aria-current="page" className="footer-top__link nuxt-link-exact-active nuxt-link-active tm-link" data-v-7ba02ca4 data-v-57399fcf>Telegram</a>
                  </li>
                </ul>
              </div>
              <div className="footer-top__col" data-v-57399fcf>
                <ul className="footer-top__list" data-v-57399fcf>
                  <li className="tm-rf2 tm-rf1-m-up tm-overline tm-medium" data-v-57399fcf>
                    <span className="footer-top__list-title" data-v-57399fcf>Developers</span>
                  </li>
                  <li data-v-57399fcf>
                    <a href="http://docs.archway.io/developers" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Introduction</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="http://docs.archway.io/" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Documentation</a>
                  </li>
                  <li data-v-57399fcf>
                    <a href="https://github.com/archway-network" target="_blank" rel="noopener noreferrer" className="footer-top__link tm-link" data-v-7ba02ca4 data-v-57399fcf>Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
          <div className="mt-9 back-to-top" style={{display: 'none'}} data-v-57399fcf>
            <a href="#" className="tm-rf0 tm-rf-1-m tm-muted scrolltop tm-link" data-v-7ba02ca4 data-v-57399fcf>
              <span className="sr-only" data-v-7ba02ca4 data-v-57399fcf>Backed by the team at Tendermint</span>
              <svg width={204} height={257} viewBox="0 0 204 257" fill="none" xmlns="http://www.w3.org/2000/svg" className="back-to-top__icon" data-v-57399fcf data-v-7ba02ca4>
                <path d="M102 146.5V99M102 99L81 120M102 99L122.5 120" stroke="#EAE5E1" strokeWidth={8} strokeMiterlimit={16} />
                <path d="M175.57 130.879L175.026 138.665C174.696 143.386 176.898 145.683 180.013 145.901C183.157 146.121 185.087 144.043 185.336 142.037L185.535 142.05C185.881 143.949 187.041 145.595 189.581 145.772C192.586 145.982 195.063 144.062 195.365 139.737L195.884 132.298L175.57 130.879ZM177.985 134.127L184.492 134.582L184.175 139.115C184.003 141.575 182.309 143.001 180.374 142.866C178.668 142.747 177.47 141.497 177.676 138.551L177.985 134.127ZM186.882 134.749L193.062 135.181L192.769 139.366C192.599 141.797 191.239 142.868 189.553 142.75C187.589 142.613 186.451 140.918 186.595 138.855L186.882 134.749Z" fill="white" />
                <path d="M172.545 154.59C172.025 157.061 172.987 158.717 173.989 159.507L173.965 159.624L171.922 159.194L171.323 162.035L181.248 164.125C185.597 165.04 187.184 161.798 187.684 159.424C188.254 156.719 187.688 153.999 185.169 152.452L183.97 155.055C184.941 155.706 185.733 157.011 185.321 158.967C184.926 160.845 183.74 161.601 182.047 161.245L181.979 161.23C180.919 161.007 181.167 159.921 181.422 157.17C181.687 154.269 181.558 151.214 178.162 150.499C175.224 149.88 173.144 151.749 172.545 154.59ZM174.747 155.714C175.094 154.07 176.083 153.038 177.523 153.342C179.08 153.67 179.344 155.168 179.213 156.898C179.141 157.869 178.922 160.16 179.253 160.666L177.326 160.261C175.555 159.888 174.237 158.137 174.747 155.714Z" fill="white" />
                <path d="M167.675 172.339C166.469 175.741 167.732 178.667 170.424 179.97L171.391 177.242C169.961 176.335 169.471 174.8 170.039 173.198C170.879 170.827 173.398 170 176.538 171.112C179.621 172.205 181.01 174.448 180.18 176.791C179.549 178.572 178.039 179.26 176.583 179.082L175.616 181.809C178.628 182.539 181.399 180.852 182.558 177.581C183.996 173.523 181.871 169.816 177.475 168.259C173.136 166.721 169.156 168.159 167.675 172.339Z" fill="white" />
                <path d="M164.208 182.025L162.808 184.648L167.589 187.2L168.198 189.204L159.667 190.534L157.949 193.754L168.75 192.035L171.619 200.576L173.295 197.436L170.458 189.024L170.58 188.796L180.773 194.236L182.173 191.613L164.208 182.025Z" fill="white" />
                <path d="M151.67 201.642C149.608 204.258 149.437 207.124 150.971 209.194L153.111 207.299C152.311 205.984 152.534 204.514 153.58 203.186C155.156 201.187 157.511 200.866 159.872 202.626L153.149 211.153L153.977 211.805C158.31 215.222 162.049 213.966 164.191 211.248C166.826 207.906 166.017 203.698 162.331 200.792C158.607 197.855 154.459 198.105 151.67 201.642ZM161.615 204.013C163.243 205.449 163.746 207.846 162.25 209.743C160.822 211.555 158.543 211.683 156.702 210.244L161.615 204.013Z" fill="white" />
                <path d="M139.698 213.924C137.513 215.651 137.709 217.663 137.892 218.76L137.697 218.914L136.224 217.05L133.946 218.85L146.573 234.827L148.905 232.983L144.213 227.047L144.354 226.936C145.361 227.344 147.229 228.072 149.46 226.309C152.354 224.022 152.678 220.053 149.607 216.168C146.543 212.291 142.607 211.625 139.698 213.924ZM140.755 216.321C142.838 214.674 145.371 215.651 147.27 218.053C149.15 220.433 149.501 223.057 147.395 224.722C145.359 226.331 142.954 225.533 140.975 223.029C138.983 220.509 138.742 217.911 140.755 216.321Z" fill="white" />
                <path d="M114.22 227.441L111.332 227.734L111.572 230.098L111.325 230.124C110.692 229.208 109.432 227.627 106.662 227.909C102.982 228.283 100.611 231.502 101.11 236.419C101.611 241.345 104.616 243.968 108.286 243.595C111.105 243.308 111.949 241.484 112.378 240.491L112.556 240.472L113.321 248L116.279 247.7L114.22 227.441ZM112.094 235.332C112.417 238.508 111.246 240.756 108.664 241.018C105.983 241.29 104.408 239.162 104.101 236.145C103.791 233.098 104.94 230.632 107.581 230.364C110.123 230.106 111.769 232.137 112.094 235.332Z" fill="white" />
                <path d="M94.223 222.216C91.836 221.638 90.0266 222.52 88.6003 224.65L78.3973 239.961L81.5117 240.745L88.0599 230.136L88.2146 230.173L89.1849 242.603L92.2774 243.352L90.4868 227L91.083 226.1C92.2948 224.307 93.3686 224.393 94.8482 225.212L96.1173 223.012C95.8068 222.773 95.0928 222.427 94.223 222.216Z" fill="white" />
                <path d="M50.2949 222.45L52.6786 224.482L50.305 227.266L52.5677 229.195L54.9413 226.41L56.6439 227.861L58.1919 226.045L56.4893 224.594L62.3393 217.73C64.1464 215.626 63.4053 213.23 61.5872 211.746C60.8618 211.141 60.2614 210.864 59.9127 210.737L58.7282 212.954C58.9054 213.053 59.2434 213.223 59.6066 213.533C60.3407 214.159 60.7926 214.962 59.6768 216.271L54.2266 222.666L51.8429 220.634L50.2949 222.45Z" fill="white" />
                <path d="M47.8683 211.035C45.977 212.57 43.9249 212.251 42.59 210.607C41.299 209.016 41.5394 207.246 43.2763 205.836L50.5405 199.939L48.6666 197.63L41.1246 203.753C38.168 206.154 37.971 209.003 39.9514 211.442C41.4492 213.287 43.1545 213.747 44.8872 213.263L45.0062 213.409L39.1239 218.185L40.9727 220.462L56.7824 207.627L54.9085 205.319L47.8683 211.035Z" fill="white" /> 
                <path d="M43.0967 187.564C41.5097 184.635 38.9446 183.345 36.4369 183.935L37.3317 186.651C38.8551 186.436 40.1178 187.222 40.9232 188.708C42.1359 190.946 41.4995 193.236 38.9497 194.708L33.7767 185.162L32.85 185.664C27.9981 188.293 27.6738 192.223 29.3223 195.266C31.3499 199.007 35.5357 199.928 39.662 197.692C43.832 195.433 45.2426 191.524 43.0967 187.564ZM36.9867 195.76C35.0241 196.688 32.6233 196.202 31.4722 194.078C30.3731 192.05 31.1567 189.906 33.2064 188.784L36.9867 195.76Z" fill="white" />
                <path d="M16.79 160.904L17.5486 163.943L13.9984 164.829L14.7185 167.714L18.2686 166.828L18.8105 168.998L21.1258 168.42L20.5839 166.25L29.3339 164.066C32.0279 163.403 32.8173 161.023 32.2007 158.759C31.9623 157.845 31.6345 157.27 31.4248 156.964L29.172 158.08C29.2588 158.263 29.4347 158.598 29.5503 159.062C29.7839 159.997 29.6847 160.914 28.0157 161.33L19.8639 163.365L19.1053 160.326L16.79 160.904Z" fill="white" />
                <path d="M30.1022 146.561C29.6567 143.26 27.7156 141.144 25.1617 140.807L25.0355 143.663C26.5361 144.003 27.4382 145.185 27.6643 146.86C28.0047 149.383 26.5977 151.299 23.6916 151.771L22.2394 141.011L21.1949 141.152C15.726 141.89 14.0292 145.45 14.492 148.879C15.0611 153.096 18.6485 155.441 23.2995 154.814C27.9998 154.18 30.7045 151.025 30.1022 146.561ZM21.483 152.059C19.3189 152.231 17.2464 150.925 16.9232 148.531C16.6147 146.244 18.1075 144.518 20.4218 144.196L21.483 152.059Z" fill="white" />
                <path d="M28.955 131.216C28.9339 128.69 27.6394 127.279 26.4912 126.722L26.4902 126.603L28.5782 126.585L28.5539 123.682L18.4122 123.767C13.9678 123.804 13.1122 127.311 13.1325 129.737C13.1556 132.501 14.2905 135.037 17.0828 136.008L17.6958 133.209C16.6083 132.781 15.555 131.676 15.5383 129.677C15.5222 127.758 16.5182 126.765 18.2483 126.751L18.3179 126.75C19.4016 126.741 19.3911 127.855 19.7322 130.597C20.0945 133.487 20.8749 136.444 24.345 136.415C27.3477 136.39 28.9793 134.119 28.955 131.216ZM26.5634 130.589C26.5774 132.27 25.8319 133.489 24.3604 133.501C22.7695 133.515 22.191 132.107 21.9479 130.389C21.8106 129.426 21.5329 127.141 21.1018 126.717L23.0705 126.701C24.8801 126.686 26.5426 128.113 26.5634 130.589Z" fill="white" />
                <path d="M28.547 118.467L28.9942 115.528L19.6852 114.112C17.6503 113.802 16.4517 112.161 16.706 110.49C16.9543 108.858 18.2076 107.892 19.8492 108.142L29.8857 109.669L30.3314 106.74L20.7078 105.276C18.8892 104.999 17.741 103.688 18.0327 101.771C18.269 100.218 19.3285 99.0715 21.3732 99.3826L31.2229 100.881L31.6701 97.9422L21.5452 96.4016C18.0948 95.8765 16.0814 97.5415 15.6656 100.274C15.335 102.447 16.1287 104.237 17.6302 105.21L17.6062 105.367C15.8546 105.774 14.641 107.008 14.3344 109.023C14.0307 111.018 14.7977 112.654 16.3632 113.536L16.3348 113.723L13.8773 113.349L13.448 116.17L28.547 118.467Z" fill="white" />
                <path d="M40.0581 75.5603C41.1483 73.2821 40.605 71.4459 39.8182 70.441L39.8697 70.3334L41.7532 71.2348L43.0065 68.6158L33.858 64.2378C29.8489 62.3193 27.5398 65.0944 26.4925 67.2829C25.2993 69.7763 25.2051 72.5531 27.2872 74.6518L29.0673 72.4061C28.2785 71.5437 27.8175 70.0885 28.6802 68.2857C29.5086 66.5546 30.8394 66.1002 32.4 66.847L32.4628 66.8771C33.4404 67.3449 32.9418 68.3409 32.0441 70.9537C31.1001 73.7096 30.5027 76.7086 33.6329 78.2065C36.3416 79.5028 38.8048 78.1793 40.0581 75.5603ZM38.1845 73.9472C37.4591 75.463 36.2538 76.231 34.9264 75.5958C33.4913 74.909 33.5896 73.3908 34.1258 71.7404C34.4255 70.8146 35.1795 68.6401 34.9784 68.0699L36.7543 68.9197C38.3867 69.7009 39.2532 71.7139 38.1845 73.9472Z" fill="white" />
                <path d="M36.6858 50.1548L34.9567 52.7663L31.9058 50.7463L30.2645 53.2252L33.3154 55.2452L32.0804 57.1106L34.0701 58.4281L35.3052 56.5627L42.8248 61.5414C45.1324 63.0812 47.4209 62.0563 48.6749 60.0723C49.1881 59.2792 49.3902 58.6498 49.4745 58.2882L47.1303 57.3801C47.0537 57.5679 46.9252 57.924 46.6617 58.322C46.1292 59.1262 45.3864 59.6718 43.9521 58.7222L36.9465 54.0838L38.6756 51.4722L36.6858 50.1548Z" fill="white" />
                <path d="M51.4255 29.8449L56.6274 26.2139L66.7691 40.7431L69.2803 38.9902L59.1386 24.461L64.3486 20.8243L62.8347 18.6555L49.9117 27.6761L51.4255 29.8449Z" fill="white" />
                <path d="M86.0892 31.2614C89.2775 30.2968 91.058 28.0441 90.9853 25.469L88.1451 25.7985C88.0487 27.3339 87.0245 28.4125 85.4066 28.902C82.9702 29.6391 80.8553 28.5544 79.9269 25.7604L90.3197 22.6163L90.0145 21.6074C88.4165 16.3254 84.632 15.2161 81.32 16.2181C77.2467 17.4504 75.5014 21.3649 76.8604 25.857C78.2338 30.3967 81.7779 32.5657 86.0892 31.2614ZM79.2915 23.6257C78.778 21.5164 79.7375 19.2627 82.0502 18.563C84.2582 17.8951 86.2 19.0944 86.8862 21.328L79.2915 23.6257Z" fill="white" />
                <path d="M101.136 19.4345C101.24 17.0006 102.79 15.6736 104.856 15.7619C106.873 15.8481 108.038 17.2216 107.943 19.4369L107.544 28.7849L110.514 28.9119L110.929 19.2062C111.09 15.4313 109.099 13.3656 105.979 13.2323C103.684 13.1342 102.139 14.133 101.364 15.7221L101.176 15.714L101.282 13.2305L98.4307 13.1086L97.7784 28.3674L100.749 28.4944L101.136 19.4345Z" fill="white" /> <path d="M121.252 32.3511C123.839 33.38 125.484 32.2042 126.343 31.4972L126.574 31.589L125.696 33.7972L128.394 34.8702L135.919 15.948L133.156 14.8493L130.36 21.8805L130.194 21.8143C130.044 20.7382 129.741 18.7557 127.099 17.7049C123.671 16.3417 120.072 18.0457 118.242 22.6469C116.416 27.2388 117.806 30.9806 121.252 32.3511ZM122.799 30.2376C120.332 29.2565 119.912 26.5745 121.043 23.7288C122.164 20.9108 124.262 19.2947 126.757 20.2868C129.168 21.2458 129.679 23.7282 128.499 26.6941C127.313 29.6784 125.183 31.1856 122.799 30.2376Z" fill="white" />
                <path d="M138.663 42.2678C141.276 44.3332 144.143 44.5072 146.214 42.9763L144.321 40.8336C143.006 41.6318 141.536 41.4076 140.209 40.3594C138.212 38.7811 137.894 36.4257 139.657 34.0673L148.175 40.7999L148.829 39.973C152.251 35.6435 150.999 31.9038 148.284 29.7582C144.945 27.1194 140.735 27.9239 137.825 31.6059C134.884 35.327 135.129 39.4748 138.663 42.2678ZM141.045 32.326C142.483 30.6994 144.881 30.1992 146.777 31.6974C148.586 33.1278 148.712 35.4067 147.271 37.2461L141.045 32.326Z" fill="white" /> <path d="M147.363 49.7704L149.303 52.0234L156.371 45.9378C157.886 44.6338 159.984 44.861 161.359 46.4584C161.761 46.9256 162.133 47.5244 162.236 47.7506L164.391 45.8951C164.226 45.6431 163.866 45.1791 163.619 44.8928C162.452 43.5365 160.684 43.0379 159.077 43.6864L158.974 43.5658L160.812 41.9828L158.937 39.8052L147.363 49.7704Z" fill="white" />
                <path d="M155.089 58.4444L156.547 61.0354L164.754 56.4174C166.547 55.408 168.502 55.9622 169.331 57.4353C170.141 58.8738 169.748 60.4067 168.301 61.221L159.454 66.1999L160.907 68.7821L169.39 64.0081C170.993 63.106 172.706 63.4317 173.656 65.1214C174.427 66.4906 174.298 68.0462 172.496 69.0605L163.813 73.9466L165.271 76.5376L174.197 71.5149C177.238 69.8032 177.799 67.2515 176.443 64.8425C175.365 62.9275 173.637 62.0059 171.856 62.1644L171.777 62.0258C172.907 60.626 173.103 58.9068 172.103 57.1304C171.113 55.3713 169.502 54.5554 167.725 54.8249L167.633 54.6603L169.799 53.4412L168.399 50.9542L155.089 58.4444Z" fill="white" />
                <path d="M166.724 81.2303L167.775 84.0113L182.062 78.6122L181.011 75.8312L166.724 81.2303ZM183.746 76.4026C184.108 77.3606 185.155 77.8793 186.066 77.5348C186.978 77.1904 187.429 76.1057 187.067 75.1477C186.701 74.1804 185.649 73.6745 184.737 74.019C183.826 74.3635 183.381 75.4353 183.746 76.4026Z" fill="white" />
                <path d="M179.019 89.1086C181.375 88.4915 183.1 89.5817 183.624 91.5824C184.135 93.5351 183.166 95.0532 181.021 95.6149L171.969 97.985L172.722 100.861L182.12 98.4002C185.775 97.4431 187.163 94.9315 186.372 91.9112C185.79 89.6892 184.381 88.5063 182.634 88.2339L182.586 88.0511L184.991 87.4215L184.268 84.6608L169.493 88.5297L170.246 91.4057L179.019 89.1086Z" fill="white" />
                <path d="M189.607 110.122L189.153 107.023L192.774 106.493L192.343 103.551L188.723 104.081L188.399 101.868L186.038 102.213L186.362 104.427L177.438 105.733C174.692 106.125 173.671 108.415 174.06 110.73C174.206 111.663 174.476 112.267 174.654 112.593L177.006 111.706C176.938 111.515 176.796 111.163 176.727 110.691C176.587 109.737 176.777 108.835 178.479 108.586L186.792 107.369L187.246 110.468L189.607 110.122Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom tm-rf-1 tm-lh-copy tm-text tm-inter" data-v-57399fcf>
        <div className="footer-bottom__line" data-v-57399fcf>
          <div className="tm-container" data-v-57399fcf>
            <div className="footer-bottom__row" data-v-57399fcf>
              <div className="footer-bottom__item footer-bottom__item--first" data-v-57399fcf>2021 Archway Network</div>
              <div className="footer-bottom__list" data-v-57399fcf>
                <div className="footer-bottom__item" data-v-57399fcf>All Rights Reserved</div>
                <div className="footer-bottom__item footer-bottom__item--small" data-v-57399fcf>
                  <a href="to:hello@archway.io" className="tm-link tm-link-dark" data-v-7ba02ca4 data-v-57399fcf>hello@archway.io</a>
                </div>
                <div className="footer-bottom__item footer-bottom__item--small" data-v-57399fcf>
                  <a href="/privacy" className="tm-link tm-link-dark" data-v-7ba02ca4 data-v-57399fcf>Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom__line" data-v-57399fcf>
          <div className="tm-container" data-v-57399fcf>
            <div className="footer-bottom__row" data-v-57399fcf>
              <div className="footer-bottom__item footer-bottom__item--first tm-rf-1" data-v-57399fcf>Archway is a registered trademark of&nbsp;All In Bits dba. Tendermint.</div>
              <div className="footer-bottom__item tm-rf-1" data-v-57399fcf>The information provided in this website is for general informational purposes only and is not a formal offer to sell or a solicitation of an offer to buy any securities, options, futures, or other derivatives related to securities in any jurisdiction and its content is not prescribed by securities laws. Information contained in this website should not be relied upon as advice to buy or sell or hold such securities or as an offer to sell such securities.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
 