# express-blog-api

A blog demo api written on top of express.

## curl links

### get all

```
curl --request GET \
  --url http://localhost:3000/blog/
```

### get one by id

```
curl --request GET \
  --url http://localhost:3000/blog/00000000-0000-0000-0000-000000000000
```

### delete one by id

```
curl --request DELETE \
  --url http://localhost:3000/blog/00000000-0000-0000-0000-000000000000
```

### add one new by body

Must have both title and body present.

```
curl --request POST \
  --url http://localhost:3000/blog/ \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "New post title",
	"body": "Hello, World!"
}'
```

### update one by id and body

Must have at least one field: title or body.

```
curl --request PUT \
  --url http://localhost:3000/blog/00000000-0000-0000-0000-000000000000 \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Updated title here",
  "body": "Updated body here"
}'
```
