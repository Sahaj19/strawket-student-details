function Pagination(props) {
  const { currentPage, totalPages, nextBtnFunc, prevbtnFunc } = props;
  return <div id="paginationDiv">
  <button id="prevBtn" onClick={() => prevbtnFunc()} disabled={currentPage === 1}>prev</button>
  <span id="currentPage">{currentPage}</span>
  <button id="nextBtn" onClick={() => nextBtnFunc()} disabled={currentPage === totalPages}>next</button>
</div> 
}

export default Pagination;