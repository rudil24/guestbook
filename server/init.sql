-- =================================================================
-- Guestbook Table Schema
-- =================================================================

-- Drop the table if it already exists to ensure a clean setup.
DROP TABLE IF EXISTS entries;

-- Create the 'entries' table to store guestbook messages.
CREATE TABLE entries (
    -- 'id' is the primary key, using BIGSERIAL for an auto-incrementing 64-bit integer.
    -- This provides a unique identifier for each entry.
    id BIGSERIAL PRIMARY KEY,

    -- 'name' stores the name of the person signing the guestbook.
    -- It's a variable-length string with a max of 255 characters.
    -- It cannot be null and must not be an empty string.
    name VARCHAR(255) NOT NULL CHECK (name <> ''),

    -- 'message' stores the content of the guestbook entry.
    -- Using TEXT as the message length can be variable and potentially long.
    -- It cannot be null and must not be an empty string.
    message TEXT NOT NULL CHECK (message <> ''),

    -- 'created_at' stores the timestamp when the entry was created.
    -- TIMESTAMPTZ is used to store the timestamp with timezone information.
    -- It defaults to the current time of the transaction and cannot be null.
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);