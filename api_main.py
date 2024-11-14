from fastapi import (
    FastAPI,
    Request,
    Header,
    Depends,
)


server = FastAPI()


@server.get('/api/test')
async def test():
    return 'SERVER_ONLINE'
