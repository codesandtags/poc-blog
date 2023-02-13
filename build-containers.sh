# Build all Docker containers

# Posts Service
POST_IMAGE="posts"
echo "\n📦 Building [$POST_IMAGE]"
cd posts/
docker build -t codesandtags/posts:0.0.1 .
echo "\n📪 Pushing [$POST_IMAGE] to Docker Hub"
docker push codesandtags/posts:0.0.1
#echo "\n🚨 Running Security Scan for [$POST_IMAGE] image"
#docker scan codesandtags/posts:0.0.1
cd ..

# Comments Service
COMMENTS_IMAGE="comments"
echo "\n📦 Building [$COMMENTS_IMAGE]"
cd comments/
docker build -t codesandtags/comments:0.0.1 .
echo "\n📪 Pushing [$COMMENTS_IMAGE] to Docker Hub"
docker push codesandtags/comments:0.0.1
#echo "\n🚨 Running Security Scan for [$COMMENTS_IMAGE] image"
#docker scan codesandtags/comments:0.0.1
cd ..


# Moderation Service
MODERATION_IMAGE="query"
echo "\n📦 Building [$MODERATION_IMAGE]"
cd moderation/
docker build -t codesandtags/moderation:0.0.1 .
echo "\n📪 Pushing [$MODERATION_IMAGE] to Docker Hub"
docker push codesandtags/moderation:0.0.1
cd ..


# Query Service
QUERY_IMAGE="query"
cd query/
echo "\n📦 Building [$QUERY_IMAGE]"
docker build -t codesandtags/query:0.0.1 .
echo "\n📪 Pushing [$QUERY_IMAGE] to Docker Hub"
docker push codesandtags/query:0.0.1
cd ..


# Event Bus Service
EVENT_BUS_IMAGE="event-bust"
echo "\n📦 Building [$EVENT_BUS_IMAGE]"
cd event-bus/
docker build -t codesandtags/event-bus:0.0.1 .
echo "\n📪 Pushing [$EVENT_BUS_IMAGE] to Docker Hub"
docker push codesandtags/event-bus:0.0.1
cd ..


# Client Web App
WEB_IMAGE="web-app"
echo "\n📦 Building [$WEB_IMAGE]"
cd client/
docker build -t codesandtags/client:0.0.1 .
echo "\n📪 Pushing [$WEB_IMAGE] to Docker Hub"
docker push codesandtags/client:0.0.1
cd ..

echo "\nDocker containers generated. 🍻"