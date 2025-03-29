import SearchDetailOffcanvas from "@/components/blocks/SearchDetailOffcanvas";
import Div from "@/components/elements/Div";
import Span from "@/components/elements/span";

export default function NotFound() {
  return (
    <div>
      <Div
        style="    display: flex;
        justify-content: space-between;
        padding: 0rem 3rem;"
      >
        <Div
          style="display: flex;
          gap: 1rem;"
        >
          <Div
            style="font-size: 24px;
            color: var(--gn3);
            font-family: monospace;"
          >
            JAVA
          </Div>
          <Span
            style="align-items: center;
            display: flex;"
          >
            총 5건
          </Span>
        </Div>
        <button
          class=""
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          상세검색
        </button>
      </Div>
      <div>
        <table></table>
      </div>
      <SearchDetailOffcanvas />
    </div>
  );
}
