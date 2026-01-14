const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function* createPaginator(fetchPage) {
    let page = 1;
   while (true){
    const res = await fetchPage(page);
    yield res.data;
    if (!res.hasMore) break;
    page++;
   }
    
}

// 테스트
const mockFetch = async (page) => {
  await delay(100);
  return {
    data: [`item-${page}-1`, `item-${page}-2`],
    hasMore: page < 3
  };
};

const paginator = createPaginator(mockFetch);

for await (const items of paginator) {
  console.log(items);
}
// ['item-1-1', 'item-1-2']
// ['item-2-1', 'item-2-2']
// ['item-3-1', 'item-3-2']