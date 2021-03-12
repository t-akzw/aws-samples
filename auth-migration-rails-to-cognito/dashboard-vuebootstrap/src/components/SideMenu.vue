<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <home-icon size="1.0x" class="custom-class"></home-icon>
            ダッシュボード
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <file-icon size="1.0x" class="custom-class"></file-icon>
            注文
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <shopping-cart-icon
              size="1.0x"
              class="custom-class"
            ></shopping-cart-icon>
            商品
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <users-icon size="1.0x" class="custom-class"></users-icon>
            お客様
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <bar-chart-2-icon
              size="1.0x"
              class="custom-class"
            ></bar-chart-2-icon>
            レポート
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="layers"></span>
            <layers-icon size="1.0x" class="custom-class"></layers-icon>
            インテグレーション
          </a>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>保存したレポート</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
          <plus-circle-icon size="1.0x" class="custom-class"></plus-circle-icon>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <file-text-icon size="1.0x" class="custom-class"></file-text-icon>
            今月
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <file-text-icon size="1.0x" class="custom-class"></file-text-icon>
            全四半期
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <file-text-icon size="1.0x" class="custom-class"></file-text-icon>
            社会参画
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <file-text-icon size="1.0x" class="custom-class"></file-text-icon>
            年末のセール
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// https://vue-feather-icons.egoist.sh/
import {
  HomeIcon,
  FileIcon,
  ShoppingCartIcon,
  UsersIcon,
  BarChart2Icon,
  LayersIcon,
  PlusCircleIcon,
  FileTextIcon,
} from "vue-feather-icons";

@Component({
  components: {
    //MyButton,
    HomeIcon,
    FileIcon,
    ShoppingCartIcon,
    UsersIcon,
    BarChart2Icon,
    LayersIcon,
    PlusCircleIcon,
    FileTextIcon,
  },
})
export default class SideMenu extends Vue {}
</script>

<style>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
