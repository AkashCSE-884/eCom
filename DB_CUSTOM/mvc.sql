PGDMP     9                    z            mvc    9.6.22    9.6.22 >    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            ?           1262    16421    mvc    DATABASE     ?   CREATE DATABASE mvc WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE mvc;
             postgres    false                        2615    16635    ecom    SCHEMA        CREATE SCHEMA ecom;
    DROP SCHEMA ecom;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            ?           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            ?            1255    16603    teachers__select(jsonb)    FUNCTION     ?  CREATE FUNCTION public.teachers__select(_in jsonb, OUT _out jsonb) RETURNS jsonb
    LANGUAGE plpgsql
    AS $$
declare
-- [GENERATOR_VERSION: 1.3.3] --
-- _gig_order_id bigint := (_in->>'gig_order_id')::bigint;
-- _gig_package_id bigint := (_in->>'gig_package_id')::bigint;
-- _gig_slug character varying := (_in->>'gig_slug')::character varying;
-- _content character varying := (_in->>'content')::character varying;
-- _active_profile_id bigint := (_in->>'active_profile_id')::bigint;
-- _bitset bigint := (_in->>'bitset')::bigint;
-- _gig_order_row jsonb := '{}'::jsonb;
-- _gig_id bigint;
-- _price numeric := 0;
-- _im_board_id bigint := 0;
-- _gig_owner_id bigint;
-- _attachment_id bigint;
-- _attachment_path character varying;
-- _in_im_board jsonb := '{}'::jsonb;
-- _in_im_participant jsonb := '{}'::jsonb;
-- _attachment jsonb := '{}'::jsonb;
-- i record;
jb jsonb := '{}'::jsonb;
_in_data jsonb := '{}'::jsonb;
_in_jb jsonb := '{}'::jsonb;
k int := 0;
_mu character varying;
begin
_out := '{}'::jsonb;
-- _in_im_board := _in;

	select 
		json_agg(j)
	into
		_in_jb
	from(
		select 
			* 
		from 
			public.teachers
	)as j
	;

_out := jsonb_set(_out, '{ret_val}', to_jsonb(_in_jb), true);
-- _out := jsonb_set(_out, '{im_board_id}', to_jsonb(_im_board_id), true);
-- _out := jsonb_set(_out, '{gig_order_id}', to_jsonb(_gig_order_id), true);
-- _out := jsonb_set(_out, '{attachment}', to_jsonb(_attachment), true);
--perform fw.dbc__condition ((_out is not null), -999, '_out somehow became null.');
end;
$$;
 B   DROP FUNCTION public.teachers__select(_in jsonb, OUT _out jsonb);
       public       postgres    false    1    3            ?            1259    16422    __EFMigrationsHistory    TABLE     ?   CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);
 +   DROP TABLE public."__EFMigrationsHistory";
       public         postgres    false    3            ?            1259    16585    cnas    TABLE     ?   CREATE TABLE public.cnas (
    id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.cnas;
       public         postgres    false    3            ?            1259    16583    cnas_id_seq    SEQUENCE     t   CREATE SEQUENCE public.cnas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cnas_id_seq;
       public       postgres    false    3    190            ?           0    0    cnas_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cnas_id_seq OWNED BY public.cnas.id;
            public       postgres    false    189            ?            1259    16723    failed_jobs    TABLE       CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.failed_jobs;
       public         postgres    false    3            ?            1259    16721    failed_jobs_id_seq    SEQUENCE     {   CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.failed_jobs_id_seq;
       public       postgres    false    197    3            ?           0    0    failed_jobs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;
            public       postgres    false    196            ?            1259    16429 
   migrations    TABLE     ?   CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);
    DROP TABLE public.migrations;
       public         postgres    false    3            ?            1259    16427    migrations_id_seq    SEQUENCE     z   CREATE SEQUENCE public.migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public       postgres    false    3    188            ?           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
            public       postgres    false    187            ?            1259    16714    password_resets    TABLE     ?   CREATE TABLE public.password_resets (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 #   DROP TABLE public.password_resets;
       public         postgres    false    3            ?            1259    16737    personal_access_tokens    TABLE     ?  CREATE TABLE public.personal_access_tokens (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 *   DROP TABLE public.personal_access_tokens;
       public         postgres    false    3            ?            1259    16735    personal_access_tokens_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.personal_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.personal_access_tokens_id_seq;
       public       postgres    false    3    199            ?           0    0    personal_access_tokens_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.personal_access_tokens_id_seq OWNED BY public.personal_access_tokens.id;
            public       postgres    false    198            ?            1259    16691    products    TABLE     <  CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(2555) NOT NULL,
    content character varying(2555),
    price double precision NOT NULL,
    image_path character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.products;
       public         postgres    false    3            ?            1259    16689    products_product_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public       postgres    false    3    192            ?           0    0    products_product_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.id;
            public       postgres    false    191            ?            1259    16702    users    TABLE     ?  CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    user_type integer DEFAULT 1 NOT NULL,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.users;
       public         postgres    false    3            ?            1259    16700    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    3    194            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    193            ?           2604    16588    cnas id    DEFAULT     b   ALTER TABLE ONLY public.cnas ALTER COLUMN id SET DEFAULT nextval('public.cnas_id_seq'::regclass);
 6   ALTER TABLE public.cnas ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    189    190    190                       2604    16726    failed_jobs id    DEFAULT     p   ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);
 =   ALTER TABLE public.failed_jobs ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            ?           2604    16432    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    187    188    188                       2604    16740    personal_access_tokens id    DEFAULT     ?   ALTER TABLE ONLY public.personal_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.personal_access_tokens_id_seq'::regclass);
 H   ALTER TABLE public.personal_access_tokens ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198    199                        2604    16694    products id    DEFAULT     r   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    191    192    192                       2604    16705    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    194    193    194            ?          0    16422    __EFMigrationsHistory 
   TABLE DATA               R   COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
    public       postgres    false    186   ?J       ?          0    16585    cnas 
   TABLE DATA               :   COPY public.cnas (id, created_at, updated_at) FROM stdin;
    public       postgres    false    190   	K       ?           0    0    cnas_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cnas_id_seq', 1, false);
            public       postgres    false    189            ?          0    16723    failed_jobs 
   TABLE DATA               a   COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
    public       postgres    false    197   &K       ?           0    0    failed_jobs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);
            public       postgres    false    196            ?          0    16429 
   migrations 
   TABLE DATA               :   COPY public.migrations (id, migration, batch) FROM stdin;
    public       postgres    false    188   CK       ?           0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 23, true);
            public       postgres    false    187            ?          0    16714    password_resets 
   TABLE DATA               C   COPY public.password_resets (email, token, created_at) FROM stdin;
    public       postgres    false    195   ?K       ?          0    16737    personal_access_tokens 
   TABLE DATA               ?   COPY public.personal_access_tokens (id, tokenable_type, tokenable_id, name, token, abilities, last_used_at, created_at, updated_at) FROM stdin;
    public       postgres    false    199   L       ?           0    0    personal_access_tokens_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.personal_access_tokens_id_seq', 1, false);
            public       postgres    false    198            ?          0    16691    products 
   TABLE DATA               `   COPY public.products (id, name, content, price, image_path, created_at, updated_at) FROM stdin;
    public       postgres    false    192   #L       ?           0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 96, true);
            public       postgres    false    191            ?          0    16702    users 
   TABLE DATA               ?   COPY public.users (id, name, email, email_verified_at, user_type, password, remember_token, created_at, updated_at) FROM stdin;
    public       postgres    false    194   ?M       ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 8, true);
            public       postgres    false    193                       2606    16426 .   __EFMigrationsHistory PK___EFMigrationsHistory 
   CONSTRAINT     {   ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");
 \   ALTER TABLE ONLY public."__EFMigrationsHistory" DROP CONSTRAINT "PK___EFMigrationsHistory";
       public         postgres    false    186    186                       2606    16590    cnas cnas_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cnas
    ADD CONSTRAINT cnas_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cnas DROP CONSTRAINT cnas_pkey;
       public         postgres    false    190    190                       2606    16732    failed_jobs failed_jobs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_pkey;
       public         postgres    false    197    197                       2606    16734 #   failed_jobs failed_jobs_uuid_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);
 M   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_uuid_unique;
       public         postgres    false    197    197            	           2606    16434    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public         postgres    false    188    188                       2606    16745 2   personal_access_tokens personal_access_tokens_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.personal_access_tokens DROP CONSTRAINT personal_access_tokens_pkey;
       public         postgres    false    199    199                       2606    16748 :   personal_access_tokens personal_access_tokens_token_unique 
   CONSTRAINT     v   ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);
 d   ALTER TABLE ONLY public.personal_access_tokens DROP CONSTRAINT personal_access_tokens_token_unique;
       public         postgres    false    199    199                       2606    16699    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public         postgres    false    192    192                       2606    16713    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public         postgres    false    194    194                       2606    16711    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    194    194                       1259    16720    password_resets_email_index    INDEX     X   CREATE INDEX password_resets_email_index ON public.password_resets USING btree (email);
 /   DROP INDEX public.password_resets_email_index;
       public         postgres    false    195                       1259    16746 8   personal_access_tokens_tokenable_type_tokenable_id_index    INDEX     ?   CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public.personal_access_tokens USING btree (tokenable_type, tokenable_id);
 L   DROP INDEX public.personal_access_tokens_tokenable_type_tokenable_id_index;
       public         postgres    false    199    199            ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?   ?   x?U??
? ????0#I?w??f?P?P?^??يx???h;"??і?$?Q%+gӘ8?8k??;?`7?i???J??8???SI?p/? _??'ĉ?&ͻ?j30?????*?Y'~?q????v???Q>?Y??T??ԥ???1?_?X?      ?      x?????? ? ?      ?      x?????? ? ?      ?   ?  x????N?0???S???N?4?wC??4?Jl??L???+??o??6(ET[??9???Y??d??????C?TR¼?????6?P?x???QBM???GB'?+F$?B?02cq?"??͕1??y???ܑO[????`{0i??8??????Ѝ????5??l??j?T?

??_??7?C?ׂh??????r????Z?:)X?^??K??ҕ??`?־p{$+???`g???'?=??sF"???????M?mkvj?/?G7'M??1???ޅ{?d??????>l????W?p8JMqN?R??q3???w?[???ǣ?ѷ|_?????<A?7;?d????8f??.B?ܓO??????s?\+?IJ$cSWz6C?u????????8??;+=Vz?c???vȞ22?????+_???      ?   ?   x?u??N?@ E??W?`???ҝ(??U+?n?A?03-?<????4.LnN???\p$??򡒈	?(	vk`?u??	????Չ!#?$?????????N&?Ƃ,:???ǻ??????m???????U????:-?9jޅ*y,??t?6Hj:LN?{9+]??ƟH,????~?8?{?? ]??_2S???pK???7y????On?'??_.,??:O?^??o]?p?MӾ?n_F     