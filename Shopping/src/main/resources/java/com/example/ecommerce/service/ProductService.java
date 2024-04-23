import redis.clients.jedis.Jedis;

public class ProductService {

    private static final String REDIS_HOST = "localhost";
    private static final int REDIS_PORT = 6379;
    private static final String PRODUCT_CACHE_KEY = "products";

    public String getProducts() {
        try (Jedis jedis = new Jedis(REDIS_HOST, REDIS_PORT)) {
            String cachedProducts = jedis.get(PRODUCT_CACHE_KEY);
            if (cachedProducts != null) {
                return cachedProducts;
            } else {
                String productsFromApi = fetchProductsFromApi();
                jedis.setex(PRODUCT_CACHE_KEY, 60, productsFromApi);
                return productsFromApi;
            }
        }
    }

    private Strisng fetchProductsFromApi() {
        return "[{\"id\": 1, \"name\": \"Product A\", \"price\": 10}, {\"id\": 2, \"name\": \"Product B\", \"price\": 20}]";
    }
}
