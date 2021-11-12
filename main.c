#include <stdio.h>
#include <stdlib.h>
#include <SDL/SDL.h>
#include <SDL/SDL_image.h>

typedef char* string;
#define true 1
#define false 0
#define WIDTH 960
#define HEIGHT 540

long tick;
int gameRunning;
SDL_Surface* ecran;
SDL_Surface * monImage=NULL;
SDL_Event event;
SDL_Rect R;

void load()
{
    printf("initializing the game\n");
    tick = 0;
    gameRunning = true;

    if (SDL_Init(SDL_INIT_VIDEO) != 0) {
        fprintf(stderr, "\nUnable to initialize SDL: %s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }
    int imgFlags = IMG_INIT_PNG;
    if( !( IMG_Init( imgFlags ) & imgFlags ) )
    {
        printf( "SDL_image could not initialize! SDL_image Error: %s\n", IMG_GetError() );
        exit(EXIT_FAILURE);
    }

    SDL_WM_SetCaption(__TIME__, NULL);

    ecran = NULL;

    if ((ecran = SDL_SetVideoMode(WIDTH, HEIGHT, 32, SDL_HWSURFACE)) == NULL)
    {
        fprintf(stderr, "Erreur VideoMode%s\n", SDL_GetError());
        exit(EXIT_FAILURE);
    }

    monImage = SDL_LoadBMP("./pandaa.bmp");
    
    R.x = 10;
    R.y = 10;
    R.h = 50;
    R.w = 50;
}

void unload()
{
    SDL_FreeSurface(ecran);
}

void get_input()
{
    SDL_WaitEvent(&event);
    switch (event.type)
    {
    case SDL_QUIT:
        gameRunning = false;
        break;
    case SDL_KEYDOWN:
        switch(event.key.keysym.sym)
        {
            case SDLK_UP:
                if (R.y-10 >= 0)
                {
                    R.y -= 10;
                }
                else
                {
                    R.y = 0;
                }
                break ;
            case SDLK_DOWN:
                R.y += 10;
                if (R.y+10 <= HEIGHT-50)
                {
                    R.y += 10;
                }
                else
                {
                    R.y = HEIGHT-50;
                }
                break ;
            case SDLK_RIGHT:
                if (R.x+10 <= WIDTH-50)
                {
                    R.x += 10;
                }
                else
                {
                    R.x = WIDTH-50;
                }
                break ;
            case SDLK_LEFT:
                if (R.x-10 >= 0)
                {
                    R.x -= 10;
                }
                else
                {
                    R.x = 0;
                }
                break ;
            default:
                break;
        }
        break;
    default:
        break;
    }
}

void update()
{
    get_input();
    if (gameRunning == false) { return; }
}

void draw()
{
    SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 200, 200, 200));
    SDL_SetColorKey(monImage, SDL_SRCCOLORKEY, SDL_MapRGB(monImage->format, 0, 255, 0));
    SDL_BlitSurface(monImage, NULL, ecran,  &R);
    SDL_Flip(ecran);
}

void logic()
{
    load();
    while (gameRunning)
    {
        tick++;
        update();
        draw();
    }
    printf("Unload\n");
    unload();
}

int main(int argc, char* argv[])
{
    logic();
    return EXIT_SUCCESS;
}